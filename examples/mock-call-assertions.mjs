/**
 * Call-count assertions on mocks.
 *
 * `expect(mock).toHaveBeenCalled()` does not prove a behaviour. It proves the
 * code called what it was told to call. When the mock stands in for a database,
 * the assertion cannot reach the constraint that actually decides the outcome.
 */
export default {
  name: 'mock-call-assertions',
  scan: {
    dirs: ['apps', 'packages'],
    match: /\.(spec|test|e2e-spec)\.(ts|tsx|js|mjs)$/,
  },
  rules: {
    'call-count': {
      regime: 'ratchet',
      detect: (source) =>
        source.match(
          /toHaveBeen(?:Called|CalledOnce|CalledTimes|CalledWith|CalledExactlyOnceWith|NthCalledWith|LastCalledWith)\b/g,
        ) ?? [],
      why:
        'A call-count assertion proves the code called what it was told to ' +
        'call, never that the result is right. One such test stayed green ' +
        'while the endpoint it covered returned 500 in production: the failure ' +
        'was a UNIQUE constraint, and a mock has no constraints. The test did ' +
        'not protect the path and it manufactured confidence, which is the ' +
        'worst of both halves.',
      instead:
        'Assert the outcome: the real HTTP status, the row in the database, ' +
        'the observable state after the action. For an insert on a table with ' +
        'a UNIQUE constraint, the test worth writing is "do it a second time" ' +
        'against a real database.',
    },
  },
}
