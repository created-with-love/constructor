export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  render(model) {
    this.$el.innerHTML = '';
    model.forEach(block => {
      //перебирает каждый обьект и запускает его фукнцию toHTML, которая создается в прототим классом (blocks.js)
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}
