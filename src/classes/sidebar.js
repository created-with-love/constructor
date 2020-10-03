import { block } from '../utils.js';
import { TextBlock, TitleBlock } from './blocks.js';

export class Sidebar {
  constructor(selector, updateCallback) {
    //   помечать значком доллара спереди принято те переменные, которые берут значение с ДОМ-дерева
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('text'), block('title')].join('');
  }

  add(event) {
    event.preventDefault();
    // узнает какой тип блока заполнен
    const type = event.target.name;

    // получает значение текста, который введен в первый интуп блока
    const value = event.target.value.value;

    // получает значение с инпута styles
    const styles = event.target.styles.value;

    let newBlock =
      type === 'text'
        ? (newBlock = new TextBlock(value, { styles }))
        : (newBlock = new TitleBlock(value, { styles }));
    //   else if (type === 'title') {}

    this.update(newBlock);

    event.target.value.value = '';

    event.target.styles.value = '';
  }
}
