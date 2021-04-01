import React from 'react';

export type ClickableAvatarProperties = {
  readonly imageUrl?: string;
  readonly imageAlt?: string;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly isSelected: boolean;
};

export const ClickableAvatar: React.FC<ClickableAvatarProperties> = ({
  imageUrl,
  imageAlt = '',
  onClick,
  className,
  isSelected,
}) => {
  return (
    <div
      className={`${
        isSelected
          ? 'border rounded-full border-solid border-red-500 shadow-2xl'
          : 'border-2 shadow-lg rounded-full border-gray-100'
      }`}>
      <img
        onClick={onClick}
        className={`${className} cursor-pointer hover:opacity-70 rounded-full object-fit h-28 w-28 shadow-lg ${
          isSelected ? 'opacity-60 ' : 'border-none'
        }`}
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
};
