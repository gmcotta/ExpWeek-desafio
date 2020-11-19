import React from 'react';

import imgGestaoTempo from '../../assets/images/vetor_secao_gestao_tempo.svg';
import imgRelogio from '../../assets/images/vetor_relogio.svg';

import { Container, TimeManagementSection, DefinitionSection } from './styles';

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
      <DefinitionSection>
        <h2>O Que É Gestão de Tempo?</h2>
        <p>
          Você provavelmente já deve ter parado para refletir em sua rotina que
          seria incrível se o dia tivesse mais de 24 horas, certo? Assim,
          poderia realizar todas as tarefas pendentes e ainda encontrar um
          período livre para si em meio a elas.
          <br />
          Entretanto, já que não é tão fácil mudar as convenções cronológicas,
          podemos aprender agerenciar nosso tempo.
        </p>
        <p>
          Gestão de tempo é um conjunto de técnicas usados para melhorar as
          atividades e tarefas de uma pessoa, de maneira que ela possa ter mais
          produtividade , gerando mais resultados em um espaço de tempo menor.
        </p>
        <img src={imgRelogio} alt="Imagem relógio seção definição" />
      </DefinitionSection>
    </Container>
  );
};

export default LandingPage;
