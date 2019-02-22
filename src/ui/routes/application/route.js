import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

  model() {

    $.mockjax({
      url: '*/users/1',
      response() {

        this.responseText = {'users': {
          id: 1,
          name: 'This is the User name'
        }};

      }
    });
    return this.store.find('user', 1);
  }
}
