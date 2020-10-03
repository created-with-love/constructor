import image from './assets/image.jpg';
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from './classes/blocks';

const text =
  'Весь текст генерируется автоматически с помощью JavaScript и вставляется в HTML при помощи insertAdjacentHTML';

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript', {
    tag: 'h2',
    // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`,
    // Спобос описание стилей не встроку, а с помощью обьекта выглядит лаконичнее и понятнее
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '700px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),
  new ColumnsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Создано по принципам SOLID и ООП',
      'Сборщиком выступает на проекте Parcel - простой, быстрый и удобный bundler',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    },
  ),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
];
