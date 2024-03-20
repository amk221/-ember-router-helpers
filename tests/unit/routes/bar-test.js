import { module, test } from 'qunit';
import { setupTest } from 'example/tests/helpers';

module('Unit | Route | bar', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bar');
    assert.ok(route);
  });
});
