import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: [''], name: 'homepage',      moduleId: './views/homepage',  nav: true, title:'Homepage' }

    ]);

    this.router = router;
  }
}
