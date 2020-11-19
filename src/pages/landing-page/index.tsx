import React from 'react';

import imgGestaoTempo from '../../assets/images/vetor_secao_gestao_tempo.svg';

import { Container, TimeManagementSection } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <TimeManagementSection>
        <div>
          <h1>Gestão de tempo</h1>
          <p>
            “Com organização e tempo, acha-se o segredo de fazer tudo e bem
            feito.” – Pitágoras
          </p>
        </div>
        <img src={imgGestaoTempo} alt="Imagem seção de gestão de tempo" />
        <span>TEMPO</span>
      </TimeManagementSection>
    </Container>
  );
};

export default LandingPage;
