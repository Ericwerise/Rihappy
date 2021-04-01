import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { Button } from 'src/stories/atoms';
import { Menu, MenuObject } from 'src/stories/molecules/Menu';

export type CircleMenuProperties = {
  readonly children?: ReactNode;
  readonly objectsArray: readonly MenuObject[];
  readonly screenId: string;
  readonly value?: string;
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly onClickBack: () => void;
  readonly buttonLabel: string;
  readonly onClick: () => void;
  readonly inputPlaceholder?: string;
  readonly inputId?: string;
  readonly error: boolean;
};

const CircleMenu = ({
  children,
  objectsArray,
  screenId,
  value,
  onChange,
  onClickBack,
  buttonLabel,
  onClick,
  inputPlaceholder,
  inputId,
  error,
}: CircleMenuProperties): JSX.Element => {
  const [showLabel, setShowLabel] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    objectsArray.map((item) => {
      if (item.id === '18') {
        return setShowLabel(true);
      }
    });
  }, [objectsArray]);

  useEffect(() => {
    if (screenId === 's1') {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [screenId]);
  return (
    <div className="flex flex-col bg-white w-full">
      {children}
      {/* Menu */}
      <div className="py-6 px-2">
        <Menu objectsArray={objectsArray} />
        {inputPlaceholder && (
          <form className="mt-4 flex flex-row-reverse">
            <input
              id={inputId ?? ''}
              value={value}
              onChange={onChange}
              className="border w-28 rounded-lg text-center h-8"
              placeholder={inputPlaceholder}
            />
          </form>
        )}
        <div className="py-4">
          <div className="flex flex-col justify-center items-center my-2">
            <Button
              className="rounded-3xl w-60 py-2.5"
              color="green"
              id="btn-landing"
              onClick={onClick}>
              <span className="text-xl">{buttonLabel}</span>
            </Button>
            {showLabel && (
              <div className="pt-2">
                <p className="text-xs text-gray-600">
                  No final te contamos como fazer parte, caso não saiba, tá?!
                </p>
              </div>
            )}
            {showButton && (
              <div onClick={onClickBack} className="pt-2">
                <p className="text-xs cursor-pointer text-gray-600 hover:text-red-500 transform duration-500">{`< Voltar `}</p>
              </div>
            )}

            {error && (
              <div className="pt-2">
                <p className="text-xs text-red-600">
                  Desculpe! Houve uma falha ao enviar suas respostas. Tente novamente!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleMenu;
