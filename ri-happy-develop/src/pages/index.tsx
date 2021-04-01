/* eslint-disable sonarjs/no-duplicate-string */
import Head from 'next/head';
import React, { ChangeEvent } from 'react';
import CircleMenu from 'src/components/CircleMenu';
import Container from 'src/components/Container';
import FinalScreen from 'src/components/FinalScreen';
import HandleText from 'src/components/HandleText';
import { Loading } from 'src/components/Loading';
import { useAppState, Screen } from 'src/lib/context';

const onClickEnroll = (): void => {
  alert('TODO: ENROLL FLOW');
};

export default function Home(): JSX.Element {
  const {
    setScreen,
    dataScreenOne,
    dataScreenTwo,
    dataScreenThree,
    dataScreenFour,
    dataScreenFive,
    setValueInputOne,
    setValueInputTwo,
    valueInputOne,
    valueInputTwo,
    screen,
    onSubmitForm,
    loading,
    error,
    saveData,
  } = useAppState();

  const onClickBack = (screen: Screen): void => {
    switch (screen) {
      case Screen.SCREEN_TWO:
        return setScreen(Screen.SCREEN_ONE);

      case Screen.SCREEN_THREE:
        return setScreen(Screen.SCREEN_TWO);

      case Screen.SCREEN_FOUR:
        return setScreen(Screen.SCREEN_THREE);

      case Screen.SCREEN_FIVE:
        return setScreen(Screen.SCREEN_FOUR);
      default:
        setScreen(Screen.SCREEN_ONE);
    }
  };

  const onClick = (screen: Screen): void => {
    saveData(screen);
    switch (screen) {
      case Screen.SCREEN_ONE:
        return setScreen(Screen.SCREEN_TWO);

      case Screen.SCREEN_TWO:
        return setScreen(Screen.SCREEN_THREE);

      case Screen.SCREEN_THREE:
        return setScreen(Screen.SCREEN_FOUR);

      case Screen.SCREEN_FOUR:
        return setScreen(Screen.SCREEN_FIVE);

      case Screen.SCREEN_FIVE:
        return onSubmitForm();
      default:
        setScreen(Screen.SCREEN_ONE);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const id = event.target.id;
    if (id === 'who') {
      setValueInputOne(value);
    }
    if (id === 'when') {
      setValueInputTwo(value);
    }
  };

  const dataObject = [
    {
      id: 's1',
      activeScreen: Screen.SCREEN_ONE,
      data: dataScreenOne,
      inputPlaceholder: 'Pra Quem?',
      inputId: 'who',
      value: valueInputOne,
    },
    { id: 's2', activeScreen: Screen.SCREEN_TWO, data: dataScreenTwo, hasInput: false },
    {
      id: 's3',
      activeScreen: Screen.SCREEN_THREE,
      data: dataScreenThree,
      hasInput: true,
      inputPlaceholder: 'Quando?',
      inputId: 'when',
      value: valueInputTwo,
    },
    { id: 's4', activeScreen: Screen.SCREEN_FOUR, data: dataScreenFour },
    { id: 's5', activeScreen: Screen.SCREEN_FIVE, data: dataScreenFive },
  ];

  const buttonLabel = screen === Screen.SCREEN_FIVE ? 'obrigado!' : 'próxima pergunta';
  return (
    <>
      <Head>
        <title>Ri Happy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {loading && <Loading />}
        {screen !== Screen.SCREEN_SIX ? (
          dataObject.map(
            (item) =>
              screen === item.activeScreen && (
                <div key={item.activeScreen}>
                  <CircleMenu
                    screenId={item.id}
                    objectsArray={item.data}
                    value={item.value}
                    onChange={onChange}
                    onClickBack={() => onClickBack(screen)}
                    buttonLabel={buttonLabel}
                    inputPlaceholder={item.inputPlaceholder}
                    inputId={item.inputId}
                    error={error}
                    onClick={() => onClick(screen)}>
                    <HandleText screen={screen} />
                  </CircleMenu>
                </div>
              ),
          )
        ) : (
          <FinalScreen onClick={onClickEnroll} />
        )}
      </Container>
    </>
  );
}
