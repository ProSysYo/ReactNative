import {SlideItem} from './types';

export const slides: SlideItem[] = [
  {
    id: '1',
    image: require('./images/image1.png'),
    title: 'Выбирай или создавай часы',
    subtitle:
      'Выбери час с подходящими  активностями из списка готовых или создай свой и распредели время как удобно тебе.',
  },
  {
    id: '2',
    image: require('./images/image2.png'),
    title: 'Проводи время с пользой',
    subtitle:
      'Запусти таймер часа и занимайся дела. Мы будем напоминать тебе о смене активности и уведомим о завершении часа.',
  },
  {
    id: '3',
    image: require('./images/image3.png'),
    title: 'Анализируй и получай награды',
    subtitle:
      'Выполняй часы и получай награды, анализируй как часто ты проводишь время с пользой и чем именно занимаешься.',
  },
];
