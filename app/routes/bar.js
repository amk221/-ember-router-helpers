import Route from '@ember/routing/route';

export default class BarRoute extends Route {
  model() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}
