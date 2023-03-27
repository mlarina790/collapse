export default class Collapse {
  constructor(container) {
    this.container = container;
    this.button = this.container.querySelector('.collapse_button');
  }

  init() {
    this.button.addEventListener('click', (event) => this.getTextBlock(event));
  }

  getTextBlock(event) {
    event.preventDefault();
    this.container.querySelector('.collapse_container').classList.toggle('active');
  }
}
