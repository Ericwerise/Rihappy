/* eslint-disable sonarjs/no-duplicate-string */
import { MenuObject } from 'src/stories/molecules/Menu';

import { ScreenState } from './context';
import utils from './utils';

export const getDataScreenOne = (
  stateScreenOne: ScreenState,
  setStateScreenOne: (state: ScreenState) => void,
): readonly MenuObject[] => {
  return [
    {
      id: '1',
      imageURL: '/static/landing/resp-01.png',
      imageALT: 'resposta-1',
      isSelected: stateScreenOne[1],
      backgroundColor: utils.YELLOW_THEME,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 1: !stateScreenOne[1] });
      },
      label: 'para mim',
    },
    {
      id: '2',
      imageURL: '/static/landing/resp-02.png',
      imageALT: 'resposta-2',
      isSelected: stateScreenOne[2],
      backgroundColor: utils.ORANGE,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 2: !stateScreenOne[2] });
      },
      label: 'filho(a)',
    },
    {
      id: '3',
      imageURL: '/static/landing/resp-03.png',
      imageALT: 'resposta-3',
      isSelected: stateScreenOne[3],
      backgroundColor: utils.RED,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 3: !stateScreenOne[3] });
      },
      label: 'afilhado(a)',
    },
    {
      id: '4',
      imageURL: '/static/landing/resp-04.png',
      imageALT: 'resposta-4',
      isSelected: stateScreenOne[4],
      backgroundColor: utils.PINK,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 4: !stateScreenOne[4] });
      },
      label: 'sobrinho(a)',
    },
    {
      id: '5',
      imageURL: '/static/landing/resp-5.png',
      imageALT: 'resposta-5',
      isSelected: stateScreenOne[5],
      backgroundColor: utils.PURPLE_THEME,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 5: !stateScreenOne[5] });
      },
      label: 'amigo do filho(a)',
    },
    {
      id: '6',
      imageURL: '/static/landing/resp-06.png',
      imageALT: 'resposta-6',
      isSelected: stateScreenOne[6],
      backgroundColor: utils.LIGHT_BLUE,
      onClick: () => {
        setStateScreenOne({ ...stateScreenOne, 6: !stateScreenOne[6] });
      },
      label: 'outros',
    },
  ];
};

export const getDataScreenTwo = (
  stateScreenTwo: Partial<ScreenState>,
  setStateScreenTwo: (state: Partial<ScreenState>) => void,
): readonly MenuObject[] => {
  return [
    {
      id: '7',
      imageURL: '/static/screen-two/s2-resp-01.png',
      imageALT: 'resposta-7',
      isSelected: stateScreenTwo[1],
      backgroundColor: utils.BASE_YELLOW,
      onClick: () => {
        setStateScreenTwo({
          1: true,
          2: false,
          3: false,
          4: false,
          5: false,
        });
      },
      label: 'menos de 2 anos',
    },
    {
      id: '8',
      imageURL: '/static/screen-two/s2-resp-02.png',
      imageALT: 'resposta-8',
      isSelected: stateScreenTwo[2],
      backgroundColor: utils.ORANGE,
      onClick: () => {
        setStateScreenTwo({
          1: false,
          2: true,
          3: false,
          4: false,
          5: false,
        });
      },
      label: 'de 2 a 4 anos',
    },
    {
      id: '9',
      imageURL: '/static/screen-two/s2-resp-03.png',
      imageALT: 'resposta-9',
      isSelected: stateScreenTwo[3],
      backgroundColor: utils.RED,
      onClick: () => {
        setStateScreenTwo({
          1: false,
          2: false,
          3: true,
          4: false,
          5: false,
        });
      },
      label: 'de 5 a 9 anos',
    },
    {
      id: '10',
      imageURL: '/static/screen-two/s2-resp-04.png',
      imageALT: 'resposta-10',
      isSelected: stateScreenTwo[4],
      backgroundColor: utils.BASE_YELLOW,
      onClick: () => {
        setStateScreenTwo({
          1: false,
          2: false,
          3: false,
          4: true,
          5: false,
        });
      },
      label: 'de 10 a 13 anos',
    },
    {
      id: '11',
      imageURL: '/static/screen-two/s2-resp-05.png',
      imageALT: 'resposta-11',
      isSelected: stateScreenTwo[5],
      backgroundColor: utils.PURPLE_THEME,
      onClick: () => {
        setStateScreenTwo({
          1: false,
          2: false,
          3: false,
          4: false,
          5: true,
        });
      },
      label: 'mais de 14 anos',
    },
  ];
};

export const getDataScreenThree = (
  stateScreenThree: ScreenState,
  setStateScreenThree: (state: ScreenState) => void,
): readonly MenuObject[] => {
  return [
    {
      id: '12',
      imageURL: '/static/screen-three/s3-resp-01.png',
      imageALT: 'resposta-12',
      isSelected: stateScreenThree[1],
      backgroundColor: utils.BASE_YELLOW,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 1: !stateScreenThree[1] });
      },
      label: 'Aniversário',
    },
    {
      id: '13',
      imageURL: '/static/screen-three/s3-resp-02.png',
      imageALT: 'resposta-13',
      isSelected: stateScreenThree[2],
      backgroundColor: utils.ORANGE,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 2: !stateScreenThree[2] });
      },
      label: 'Natal',
    },
    {
      id: '14',
      imageURL: '/static/screen-three/s3-resp-03.png',
      imageALT: 'resposta-14',
      isSelected: stateScreenThree[3],
      backgroundColor: utils.RED,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 3: !stateScreenThree[3] });
      },
      label: 'Dia das Crianças',
    },
    {
      id: '15',
      imageURL: '/static/screen-three/s3-resp-04.png',
      imageALT: 'resposta-15',
      isSelected: stateScreenThree[4],
      backgroundColor: utils.PINK,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 4: !stateScreenThree[4] });
      },
      label: 'Prêmio por Boas Notas',
    },
    {
      id: '16',
      imageURL: '/static/screen-three/s3-resp-05.png',
      imageALT: 'resposta-16',
      isSelected: stateScreenThree[5],
      backgroundColor: utils.PURPLE_THEME,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 5: !stateScreenThree[5] });
      },
      label: 'Sempre que a pessoa pede',
    },
    {
      id: '17',
      imageURL: '/static/screen-three/s3-resp-06.png',
      imageALT: 'resposta-17',
      isSelected: stateScreenThree[6],
      backgroundColor: utils.LIGHT_CYAN,
      onClick: () => {
        setStateScreenThree({ ...stateScreenThree, 6: !stateScreenThree[6] });
      },
      label: 'Outros',
    },
  ];
};

export const getDataScreenFour = (
  stateScreenFour: Partial<ScreenState>,
  setStateScreenFour: (state: Partial<ScreenState>) => void,
): readonly MenuObject[] => {
  return [
    {
      id: '18',
      imageURL: '/static/screen-four/s4-resp-01.png',
      imageALT: 'resposta-18',
      isSelected: stateScreenFour[1],
      backgroundColor: utils.GREEN_THEME,
      onClick: () => {
        setStateScreenFour({
          1: true,
          2: false,
          3: false,
        });
      },
      label: 'Sim e já faço parte',
    },
    {
      id: '19',
      imageURL: '/static/screen-four/s4-resp-02.png',
      imageALT: 'resposta-19',
      isSelected: stateScreenFour[2],
      backgroundColor: utils.YELLOW,
      onClick: () => {
        setStateScreenFour({
          1: false,
          2: true,
          3: false,
        });
      },
      label: 'Sim, mas ainda não me cadastrei ',
    },
    {
      id: '20',
      imageURL: '/static/screen-four/s4-resp-03.png',
      imageALT: 'resposta-20',
      isSelected: stateScreenFour[3],
      backgroundColor: utils.RED,
      onClick: () => {
        setStateScreenFour({
          1: false,
          2: false,
          3: true,
        });
      },
      label: 'Não conheço',
    },
  ];
};

export const getDataScreenFive = (
  stateScreenFive: Partial<ScreenState>,
  setStateScreenFive: (state: Partial<ScreenState>) => void,
): readonly MenuObject[] => {
  return [
    {
      id: '21',
      imageURL: '/static/screen-five/s5-resp-01.png',
      imageALT: 'resposta-21',
      isSelected: stateScreenFive[1],
      backgroundColor: utils.GREEN_THEME,
      onClick: () => {
        setStateScreenFive({
          1: true,
          2: false,
        });
      },
      label: 'Oba, eu aceito!',
    },
    {
      id: '22',
      imageURL: '/static/screen-five/s5-resp-02.png',
      imageALT: 'resposta-22',
      isSelected: stateScreenFive[2],
      backgroundColor: utils.RED,
      onClick: () => {
        setStateScreenFive({
          1: false,
          2: true,
        });
      },
      label: 'Por enquanto não.',
    },
  ];
};
