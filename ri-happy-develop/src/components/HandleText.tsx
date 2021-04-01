import React from 'react';
import { Screen } from 'src/lib/context';

const HandleText = ({ screen }: { readonly screen: Screen }): JSX.Element => {
  switch (screen) {
    case Screen.SCREEN_TWO:
      return (
        <div className="text-lg font-medium text-gray-700 text-center align-middle pt-20 space-y-1">
          <p>Qual a idade dessa pessoa?</p>
        </div>
      );
    case Screen.SCREEN_THREE:
      return (
        <div className="text-2xl font-medium text-gray-700 text-center align-middle pt-4 space-y-1">
          <p>
            E em quais ocasiões você <br /> costuma comprar algo?
          </p>
          <p className="text-base pt-0.5">(escolha quantas opções quiser)</p>
        </div>
      );
    case Screen.SCREEN_FOUR:
      return (
        <div className="text-xl font-medium text-gray-700 text-center align-middle py-14">
          <p>
            Você sabia que a Ri Happy tem <br /> um programa de fidelidade,
            <br /> o Meu Solzinho, que te dá
            <br />
            acesso a benefícios exclusivos
            <br /> <strong>como dinheiro de volta,</strong>
            <br /> <strong>descontos </strong>e <strong>frete grátis?</strong>
          </p>
        </div>
      );
    case Screen.SCREEN_FIVE:
      return (
        <div className="text-xl font-medium text-gray-700 text-center align-middle pt-10 space-y-1">
          <p>
            Agora que já nos conhecemos,
            <br /> que tal receber conteúdos
            <br /> relevantes, promoções, ofertas,
            <br />
            novidades, tudo de acordo com
            <br /> os seus interesses?
          </p>
        </div>
      );
    default:
      return (
        <div className="text-lg font-medium text-gray-700 text-center align-middle pt-4 space-y-1">
          <p>
            Obaaa! :) São só algumas <br /> perguntinhas rápidas.
            <br />
          </p>
          <p>
            Quando você compra com a gente,
            <br /> pra quem costuma comprar?
          </p>
          <p className="text-sm pt-0.5">(escolha quantas opções quiser)</p>
        </div>
      );
  }
};

export default HandleText;
