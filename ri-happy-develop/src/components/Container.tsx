import React, { ReactNode } from 'react';
import { Header } from 'src/stories/molecules/Header';

const Container = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  return (
    <div className="max-w-full md:max-w-xl mx-auto max-h-24">
      <Header />
      <main className="flex flex-col justify-center bg-gray-50">{children}</main>
    </div>
  );
};

export default Container;
