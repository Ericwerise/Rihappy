import React, { FunctionComponent, ReactNode } from 'react';
import { Color, Size, Variant } from 'src/lib/types';

export type ButtonProperties = {
  readonly id: string;
  readonly children: ReactNode;
  readonly onClick?: () => void;
  readonly type?: 'button' | 'submit' | 'reset' | undefined;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly color?: Color;
  readonly size?: Size;
  readonly variant?: Variant;
  readonly icon?: ReactNode;
};

// TODO: Implement Variant
const getColorClassName = (color: Color, variant: Variant): string => {
  switch (color) {
    case 'black':
      return 'bg-black hover:bg-gray-800 focus:ring-gray-600 text-white';
    case 'white':
      return 'bg-white hover:bg-gray-50 focus:ring-gray-500 border-gray-300 text-gray-700';
    case 'gray':
      return 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500';
    case 'red':
      return 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
    case 'orange':
      return 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500';
    case 'yellow':
      return 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500';
    case 'green':
      return 'bg-green-light hover:bg-green-700 focus:ring-green-500';
    case 'teal':
      return 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500';
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
    case 'indigo':
      return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500';
    case 'purple':
      return 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500';
    case 'pink':
      return 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500';
    default:
      return '';
  }
};

const getSizeClassName = (size: Size): string => {
  switch (size) {
    case 'xs':
      return 'px-2.5 py-1.5 text-xs rounded';

    case 'sm':
      return 'px-3 py-2 text-sm leading-4 rounded-md';

    case 'base':
      return 'px-4 py-2 text-sm rounded-md';

    case 'lg':
      return 'px-4 py-2 text-base rounded-md';

    case 'xl':
      return 'px-16 py-2 text-base rounded-3xl';

    default:
      return '';
  }
};

export const Button: FunctionComponent<ButtonProperties> = ({
  id,
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  color = 'blue',
  size = 'base',
  variant = 'primary',
  icon,
}) => {
  const sizeClassName = getSizeClassName(size);
  const colorClassName = getColorClassName(color, variant);
  const disabledClassName = disabled ? 'opacity-75 cursor-not-allowed' : '';

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center border border-transparent font-medium shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClassName} ${colorClassName} ${disabledClassName} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
