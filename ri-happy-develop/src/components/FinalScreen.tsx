import React from 'react';
import { Button } from 'src/stories/atoms';

const FinalScreen = ({ onClick }: { readonly onClick: () => void }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center pt-2 items-center">
      <div className="text-3xl text-gray-700 text-center align-middle md:pt-2">
        Obrigado por participar!
      </div>
      <div className="md:pt-2">
        <img className="object-fit" src="/static/screen-six/main.png" alt="main" />
      </div>
      <div className="relative">
        <div className="sticky bottom-0 max-w-full md:max-w-xl">
          <img className="object-contain" src="/static/screen-six/footer.png" alt="footer" />
        </div>
        <div className="absolute bottom-16 left-2 md:bottom-20 md:left-16">
          <Button
            className="rounded-2xl"
            size="xl"
            color="green"
            id="participe-btn"
            onClick={onClick}>
            participe!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
