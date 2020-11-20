import React from 'react';

import imgGestaoTempo from '../../assets/images/vetor_secao_gestao_tempo.svg';
import imgRelogio from '../../assets/images/vetor_relogio.svg';
import imgWorkspace from '../../assets/images/vetor_workstation.svg';
import imgRelax from '../../assets/images/vetor_relax.svg';
import imgYesNo from '../../assets/images/vetor_yes_no.svg';
import imgRedesSociais from '../../assets/images/vetor_redes_sociais.svg';
import imgBeneficios from '../../assets/images/vetor_homem_tempo.svg';
import iconRelogio from '../../assets/images/icone_relogio.svg';
import imgSemCelular from '../../assets/images/vetor_sem_celular.svg';
import imgCalendario1 from '../../assets/images/vetor_calendario_relogio_1.svg';
import imgAgenda from '../../assets/images/vetor_agenda.svg';
import imgPensamento from '../../assets/images/vetor_pensamento.svg';
import imgCalendario2 from '../../assets/images/vetor_calendario_relogio_2.svg';
import imgAlvo from '../../assets/images/vetor_alvo.svg';
import imgMultitarefas from '../../assets/images/vetor_multitarefas.svg';
import imgGestora from '../../assets/images/vetor_gestora.svg';

import {
  Container,
  TimeManagementSection,
  DefinitionSection,
  LosingTimeSection,
  BenefitsSection,
  HowToSection,
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
      <HowToSection>
        <h2>Como Fazer a Gestão do Tempo?</h2>
        <p>Aqui vão algumas sugestões de como administrar o tempo:</p>
        <div className="howto-card">
          <h3>1. Diminua as distrações</h3>
          <div>
            <img src={imgSemCelular} alt="Símbolo de proibido usar celular" />
            <div>
              <p>
                Para ter uma melhor organização pessoal e gestão do tempo,
                diminua o tempo perdido com as distrações como Whats app, redes
                sociais e até a leitura indiscriminada dos e-mails durante o dia
                inteiro.
              </p>
              <p>
                Uma dica é desabilitar as notificações de mensagens do celular e
                alertas de e-mails, e reservar um ou dois momentos no seu dia
                para checagem de mensagens, e-mails ou mídias sociais. Se você
                for um “viciado” no celular, sugiro se esforçar um pouco e mudar
                esse hábito, que além de prejudicar a sua organização do tempo,
                afeta também a sua saúde.
              </p>
            </div>
          </div>
        </div>
        <div className="howto-card">
          <h3>2. Planejamento e Revisão semanal</h3>
          <div>
            <div>
              <p>
                Para começar a semana de forma planejada, com melhor gestão de
                tempo e produtividade, tenha um momento semanal para fazer um
                planejamento de suas atividades da semana, analisar suas
                pendências, seus projetos pessoais e até profissionais
                engavetados.
              </p>
              <p>
                Esse planejamento semanal poderá ser modificado, se necessário,
                com o decorrer da semana.
              </p>
            </div>
            <img src={imgCalendario1} alt="Imagem de um calendário e relógio" />
          </div>
        </div>
        <div className="howto-card">
          <h3>3. Faça uma agenda</h3>
          <div>
            <img src={imgAgenda} alt="Imagem de Agenda" />
            <div>
              <p>
                Tenha uma agenda. É preciso ter uma agenda na qual você consiga
                enxergar os compromissos do dia, da semana e até os mensais.
              </p>
              <p>
                Use uma agenda de papel ou eletrônica, ou até uma planilha de
                gestão do tempo, para organizar melhor suas tarefas e o prazo
                que têm para concluí-las.
              </p>
              <p>
                Mais uma coisa: revise essa agenda todo dia no início da manhã
                ou no final do dia anterior (preferível) já veja sua programação
                do dia que está por vir.
              </p>
            </div>
          </div>
        </div>
        <div className="howto-card">
          <h3>4. Tire as pendências da cabeça</h3>
          <div>
            <div>
              <p>
                Anote as pendências, para não ficar perdendo tempo pensando
                nelas - o que atrapalha muito a sua produtividade - e escolha um
                momento para resolvê-las. Essas “pendências” ficam ocupando um
                espaço importante do cérebro, cansa a cabeça e consome uma
                energia danada.
              </p>
              <p>
                Só para você fazer um paralelo, é como o celular procurando
                sinal de wi-fi o tempo todo que ele está ligado. Isso consome
                uma bateria danada, não é mesmo?
              </p>
            </div>
            <img
              src={imgPensamento}
              alt="Imagem de uma nuvem representando pensamento"
            />
          </div>
        </div>
        <div className="howto-card">
          <h3>5. Faça agora e não deixe para amanhã</h3>
          <div>
            <img src={imgCalendario2} alt="Imagem de calendário e relógio" />
            <div>
              <p>
                Quando surgir uma tarefa que vai levar um tempo curto – como
                passar um e-mail urgente--, faça naquela hora e já resolva a
                questão. Isso se chama “não procrastinar”. Se for tomar um tempo
                longo, planeje. Veja quanto tempo será necessário e planeje dias
                ou blocos de tempo para resolver a questão. Assim você consegue
                a otimização do tempo!
              </p>
              <p>
                Não deixe para depois, porque senão isso poderá virar mais um
                item da lista de coisas urgentes que você ainda não fez.
              </p>
            </div>
          </div>
        </div>
        <div className="howto-card">
          <h3>6. Tenha foco</h3>
          <div>
            <div>
              <p>
                Não faça várias coisas ao mesmo tempo, comece e complete tarefa
                a tarefa. Um estudo do Instituto de Psiquiatria da Universidade
                de Londres comprovou que o estado multitarefa pode reduzir até
                40% da produtividade.
              </p>
              <p>
                É aquela mesma história do “dirigir” e atender o celular, a
                atenção fica dividida e alguma parte do que está sendo executado
                sai perdendo nisso. Neste caso, a atenção no trânsito – que
                certamente que é o que merece uma prioridade nesse momento - é
                prejudicada.
              </p>
            </div>
            <img
              src={imgAlvo}
              alt="Imagem de um alvo acertado por uma flecha"
            />
          </div>
        </div>
        <div className="howto-card">
          <h3>7. Saiba priorizar</h3>
          <div>
            <img
              src={imgMultitarefas}
              alt="Imagem de uma pessoa fazendo várias tarefas"
            />
            <div>
              <p>
                Analise suas tarefas do dia e siga o seu planejamento. Além
                disso, considere as prioridades: saiba diferenciar o que é
                urgente e importante, importante e não urgente, e veja se não
                está classificando algo como “urgente e não importante” e sair
                correndo ou colocando foco em algo que não deveria.
              </p>
              <p>
                Para uma boa gestão de tempo e produtividade, o ideal seria
                dedicar cerca de 70% naquilo que for “Importante e Não urgente”.
                Sinal de Planejamento, organização, produtividade e eficiência.
              </p>
            </div>
          </div>
        </div>
        <div className="howto-card">
          <h3>8. Seja gestor do próprio tempo</h3>
          <div>
            <div>
              <p>
                Cuidados com os pedidos de atenção de “1 minutinho” de outras
                pessoas! Esses pedidos são verdadeiras ciladas para a gestão do
                tempo e organização do trabalho.
              </p>
              <p>
                Esse prazo nunca é real, e pode levar 30 ou 40 preciosos minutos
                do tempo que você já não tinha. Organize essa conversa, olhe
                para a sua agenda e veja onde você tem uma brecha, que não vai
                atrapalhar o seu planejamento.
              </p>
            </div>
            <img src={imgGestora} alt="Imagem de uma gestora e um relógio" />
          </div>
        </div>
      </HowToSection>
    </Container>
  );
};

export default LandingPage;
