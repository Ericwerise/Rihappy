import React from 'react';

import { ClickableAvatar } from '../atoms/ClickableAvatar';

export type MenuObject = {
  readonly id: string;
  readonly imageURL: string;
  readonly imageALT: string;
  readonly isSelected?: boolean;
  readonly backgroundColor: string;
  readonly onClick: () => void;
  readonly label: string;
};

export type MenuProperties = {
  readonly objectsArray: readonly MenuObject[];
};

export const Menu: React.FC<MenuProperties> = ({ objectsArray }) => {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-5 bg-white">
      {objectsArray.map((item) => (
        <div
          className={`${
            item.id === '21' || item.id === '22' ? 'relative left-2/4 right-2/4 mt-20 pb-10' : ''
          } ${item.id === '10' || item.id === '11' ? 'relative left-2/4 right-2/4' : ''}`}
          key={item.id}>
          <div className="flex flex-col justify-center items-center text-center space-y-2">
            <ClickableAvatar
              imageUrl={item.imageURL}
              imageAlt={item.imageALT}
              className={item.backgroundColor}
              isSelected={item.isSelected ?? false}
              onClick={item.onClick}
            />
          </div>
          <div className="pt-4 flex justify-center items-center">
            <div className="text-gray-500 text-xs">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
