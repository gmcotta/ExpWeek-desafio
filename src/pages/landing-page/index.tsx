import React from 'react';

import imgGestaoTempo from '../../assets/images/vetor_secao_gestao_tempo.svg';
import imgRelogio from '../../assets/images/vetor_relogio.svg';
import imgWorkspace from '../../assets/images/vetor_workstation.svg';
import imgRelax from '../../assets/images/vetor_relax.svg';
import imgYesNo from '../../assets/images/vetor_yes_no.svg';
import imgRedesSociais from '../../assets/images/vetor_redes_sociais.svg';
import imgBeneficios from '../../assets/images/vetor_homem_tempo.svg';
import iconRelogio from '../../assets/images/icone_relogio.svg';

import {
  Container,
  TimeManagementSection,
  DefinitionSection,
  LosingTimeSection,
  BenefitsSection,
} from './styles';

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
        <img src={imgRelogio} alt="Imagem relógio seção definição" />
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
      </DefinitionSection>
      <LosingTimeSection>
        <h2>Como Perdemos Tempo?</h2>
        <p>
          Os desperdícios de tempo podem ser divididos em duas origens:
          autogerados e gerados pelo ambiente. Quantos e-mails sem importância
          você têm recebido? Quantas mensagens respondeu pelo Whatsapp?
          <br />
          Esses são desperdícios típicos da atualidade.
        </p>
        <p>Os principais desperdícios de tempo são:</p>
        <div className="container-card">
          <div className="card">
            <h3>Desorganização</h3>
            <div>
              <img src={imgWorkspace} alt="Imagem de um local de trabalho" />
              <p>
                Como está o seu local de trabalho? Ele é funcional e permite que
                você encontre tudo o que precisa facilmente?
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Procrastinação</h3>
            <div>
              <img src={imgRelax} alt="Imagem de um homem relaxando" />
              <p>
                O quanto você adia suas ações? Isso é algo comum, porém torna-se
                um problema quando impede o funcionamento normal de suas ações.
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Incapacidade de dizer não</h3>
            <div>
              <img src={imgYesNo} alt="Imagem de dois balões de conversa" />
              <p>
                Dizer sim para tudo pode gerar atividades em excesso e lhe
                deixar sobrecarregado. A sobrecarga de trabalho gera maior
                cansaço e por consequência, menor produtividade.
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Ladrões de tempo</h3>
            <div>
              <img
                src={imgRedesSociais}
                alt="Imagem de vários logotipos de redes sociais"
              />
              <p>
                Quanto tempo você passa olhando e-mails, mensagens instantâneas
                e redes sociais? Hoje em dia é muito fácil se distrair e passar
                horas fazendo isso.
              </p>
            </div>
          </div>
        </div>
      </LosingTimeSection>
      <BenefitsSection>
        <h2>Principais Benefícios</h2>
        <ul>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Melhor gerenciamento de tarefas;</span>
          </li>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Maior produtividade;</span>
          </li>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Menores níveis de estresse;</span>
          </li>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Melhor equilíbrio entre vida profissional e pessoal;</span>
          </li>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Fim de prazos perdidos;</span>
          </li>
          <li>
            <img
              className="icone-relogio"
              src={iconRelogio}
              alt="Ícone relógio"
            />
            <span>Melhor qualidade do trabalho.</span>
          </li>
        </ul>
        <img src={imgBeneficios} alt="Homem com um relógio e ampulheta" />
      </BenefitsSection>
    </Container>
  );
};

export default LandingPage;
