// две вспомогательные функции для файла templates.js, которые уменьшают дублирование кода и
// делают функции по созданию html-кода куда более деликатными
export function row(content, styles = '') {
  return `<div class='row' style="${styles}">${content}</div>`;
}
export function col(content) {
  return `<div class='col-sm'>${content}</div>`;
}

// функция перебирает свойства обьекта и отдает вместо обьекта строку ключ-значение
export function toCss(styles = {}) {
  if (typeof styles === 'string') {
    return styles;
  }
  // const keys = Object.keys(styles);
  // const newArray = keys.map(key => {
  //   return `${key}: ${styles[key]}`;
  // });
  // return newArray.join(';');

  // сокращаю код выше:
  const toString = key => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
