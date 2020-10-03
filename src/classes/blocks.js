import { row, col, toCss } from '../utils';
// класс для создания однотипных обьектов в массиве данных model
class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  //   если в каком-то из наследуемых классов не будет метода toHTML, то возникнет ошибка
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован');
  }
}

// Отдельные классы для каждого подвида обьекта в массиве modul (на основе type Обьекта)
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), toCss(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles, imageStyles: is, alt = '' } = this.options;
    return row(
      `<img src="${this.value}" alt="${alt}" style="${toCss(is)}">`,
      toCss(styles),
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(col).join('');
    return row(html, toCss(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<p> ${this.value} </p>`), toCss(styles));
  }
}
