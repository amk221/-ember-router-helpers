import Route from '@ember/routing/route';

export default class FooRoute extends Route {
  model() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}
