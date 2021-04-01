import React from 'react';
import { Loader } from 'src/stories/atoms/Loader';

export const Loading = ({ className = '' }: { readonly className?: string }): JSX.Element => (
  <div
    className={`z-50 fixed h-screen w-screen flex items-center justify-center inset-0 ${className}`}>
    <Loader />
  </div>
);
