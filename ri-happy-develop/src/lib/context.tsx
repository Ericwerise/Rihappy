import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { MenuObject } from 'src/stories/molecules/Menu';

import {
  getDataScreenFive,
  getDataScreenFour,
  getDataScreenOne,
  getDataScreenThree,
  getDataScreenTwo,
} from './dataSource';
import safeLocalStorage from './safeLocalStorage';

export enum Screen {
  SCREEN_ONE,
  SCREEN_TWO,
  SCREEN_THREE,
  SCREEN_FOUR,
  SCREEN_FIVE,
  SCREEN_SIX,
}

export type ScreenState = {
  readonly 1: boolean;
  readonly 2: boolean;
  readonly 3: boolean;
  readonly 4: boolean;
  readonly 5: boolean;
  readonly 6: boolean;
};

type AnswerOne = {
  readonly stateScreenOne: ScreenState;
  readonly valueInputOne: string;
};

type AnswerThree = {
  readonly stateScreenThree: ScreenState;
  readonly valueInputTwo: string;
};

type AppState = {
  readonly valueInputOne: string;
  readonly setValueInputOne: (value: string) => void;
  readonly valueInputTwo: string;
  readonly setValueInputTwo: (value: string) => void;
  readonly screen: Screen;
  readonly setScreen: (screen: Screen) => void;
  readonly dataScreenOne: readonly MenuObject[];
  readonly dataScreenTwo: readonly MenuObject[];
  readonly dataScreenThree: readonly MenuObject[];
  readonly dataScreenFour: readonly MenuObject[];
  readonly dataScreenFive: readonly MenuObject[];
  readonly onSubmitForm: () => void;
  readonly loading: boolean;
  readonly error: boolean;
  readonly saveData: (screen: Screen) => void;
};

export const AppContext = React.createContext<AppState>({
  valueInputOne: '',
  setValueInputOne: () => {},
  valueInputTwo: '',
  setValueInputTwo: () => {},
  screen: Screen.SCREEN_ONE,
  setScreen: () => {},
  dataScreenOne: [],
  dataScreenTwo: [],
  dataScreenThree: [],
  dataScreenFour: [],
  dataScreenFive: [],
  onSubmitForm: () => {},
  loading: false,
  error: false,
  saveData: () => {},
});

export const useAppState = (): AppState => useContext(AppContext);

const ContextProvider = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [valueInputOne, setValueInputOne] = useState('');
  const [valueInputTwo, setValueInputTwo] = useState('');
  const [screen, setScreen] = useState<Screen>(Screen.SCREEN_ONE);
  const [stateScreenOne, setStateScreenOne] = useState<ScreenState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [stateScreenTwo, setStateScreenTwo] = useState<Partial<ScreenState>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [stateScreenThree, setStateScreenThree] = useState<ScreenState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [stateScreenFour, setStateScreenFour] = useState<Partial<ScreenState>>({
    1: false,
    2: false,
    3: false,
  });

  const [stateScreenFive, setStateScreenFive] = useState<Partial<ScreenState>>({
    1: false,
    2: false,
  });

  const formAnswer = [
    {
      questionOne: {
        forMe: stateScreenOne[1],
        sun: stateScreenOne[2],
        godSun: stateScreenOne[3],
        nephew: stateScreenOne[4],
        sunsFriend: stateScreenOne[5],
        others: stateScreenOne[6],
        forWho: valueInputOne,
      },
    },
    {
      questionTwo: {
        lessThanTwo: stateScreenTwo[1],
        twoToFour: stateScreenTwo[2],
        fiveToNine: stateScreenTwo[3],
        tenToThirteen: stateScreenTwo[4],
        moreThanFourteen: stateScreenTwo[5],
      },
    },
    {
      questionThree: {
        birthday: stateScreenThree[1],
        christmas: stateScreenThree[2],
        kidsDay: stateScreenThree[3],
        award: stateScreenThree[4],
        whenRequested: stateScreenThree[5],
        others: stateScreenThree[6],
        when: valueInputTwo,
      },
    },
    {
      questionFour: {
        yes: stateScreenFour[1],
        yesNotRegistred: stateScreenFour[2],
        no: stateScreenFour[3],
      },
    },
    {
      questionFive: {
        accept: stateScreenFive[1],
        deny: stateScreenFive[2],
      },
    },
  ];

  const onSubmitForm = async (): Promise<void> => {
    setLoading(true);
    setTimeout(() => {
      try {
        //TODO API CALL
        console.log(formAnswer);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
      setScreen(Screen.SCREEN_SIX);
      safeLocalStorage.clear();
      setLoading(false);
    }, 3000);
  };

  const saveData = (screen: Screen): false | void => {
    const answerOne: AnswerOne = {
      stateScreenOne,
      valueInputOne,
    };
    const answerThree: AnswerThree = {
      stateScreenThree,
      valueInputTwo,
    };
    const stateScreenOneString = JSON.stringify(answerOne);
    const stateScreenTwoString = JSON.stringify(stateScreenTwo);
    const stateScreenThreeString = JSON.stringify(answerThree);
    const stateScreenFourString = JSON.stringify(stateScreenFour);
    const stateScreenFiveString = JSON.stringify(stateScreenFive);

    switch (screen) {
      case Screen.SCREEN_TWO:
        return safeLocalStorage.setItem('stateScreenTwo', stateScreenTwoString);

      case Screen.SCREEN_THREE:
        return safeLocalStorage.setItem('stateScreenThree', stateScreenThreeString);

      case Screen.SCREEN_FOUR:
        return safeLocalStorage.setItem('stateScreenFour', stateScreenFourString);

      case Screen.SCREEN_FIVE:
        return safeLocalStorage.setItem('stateScreenFive', stateScreenFiveString);

      default:
        return safeLocalStorage.setItem('stateScreenOne', stateScreenOneString);
    }
  };

  const dataScreenOne = getDataScreenOne(stateScreenOne, setStateScreenOne);
  const dataScreenTwo = getDataScreenTwo(stateScreenTwo, setStateScreenTwo);
  const dataScreenThree = getDataScreenThree(stateScreenThree, setStateScreenThree);
  const dataScreenFour = getDataScreenFour(stateScreenFour, setStateScreenFour);
  const dataScreenFive = getDataScreenFive(stateScreenFive, setStateScreenFive);

  useEffect(() => {
    const stateScreenOneString = safeLocalStorage.getItem('stateScreenOne');
    if (stateScreenOneString) {
      const savedAnswerOne: AnswerOne = JSON.parse(stateScreenOneString);
      setStateScreenOne(savedAnswerOne.stateScreenOne);
      setValueInputOne(savedAnswerOne.valueInputOne);
    }

    const stateScreenTwoString = safeLocalStorage.getItem('stateScreenTwo');
    if (typeof stateScreenTwoString === 'string') {
      const savedAnswerTwo: ScreenState = JSON.parse(stateScreenTwoString as string);
      setStateScreenTwo(savedAnswerTwo);
    }

    const stateScreenThreeString = safeLocalStorage.getItem('stateScreenThree');
    if (typeof stateScreenThreeString === 'string') {
      const savedAnswerThree: AnswerThree = JSON.parse(stateScreenThreeString as string);
      setStateScreenThree(savedAnswerThree?.stateScreenThree);
      setValueInputTwo(savedAnswerThree?.valueInputTwo);
    }

    const stateScreenFourString = safeLocalStorage.getItem('stateScreenFour');
    if (typeof stateScreenFourString === 'string') {
      const savedAnswerFour: Partial<ScreenState> = JSON.parse(stateScreenFourString as string);
      setStateScreenFour(savedAnswerFour);
    }

    const stateScreenFiveString = safeLocalStorage.getItem('stateScreenFive');
    if (typeof stateScreenFiveString === 'string') {
      const savedAnswerFive: Partial<ScreenState> = JSON.parse(stateScreenFiveString as string);
      setStateScreenFive(savedAnswerFive);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        valueInputOne,
        setValueInputOne,
        valueInputTwo,
        setValueInputTwo,
        screen,
        setScreen,
        dataScreenOne,
        dataScreenTwo,
        dataScreenThree,
        dataScreenFour,
        dataScreenFive,
        onSubmitForm,
        loading,
        error,
        saveData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
