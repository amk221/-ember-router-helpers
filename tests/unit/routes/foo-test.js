import { module, test } from 'qunit';
import { setupTest } from 'example/tests/helpers';

module('Unit | Route | foo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:foo');
    assert.ok(route);
  });
});
