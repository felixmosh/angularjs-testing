export class MovieItemDriver {
  constructor(component) {
    this.component = component;
  }

  get = {
    title: () => this.component.find('[data-hook="title"]')
  };
}
