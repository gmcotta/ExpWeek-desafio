import styled from 'styled-components';

export const Container = styled.main`
  max-width: 136.6rem;
  margin: 0 auto;
`;

export const TimeManagementSection = styled.section`
  height: 100vh;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  position: relative;

  & div {
    color: var(--color-text-dark);
    & h1 {
      font-family: 'Exo', sans-serif;
      font-size: 8rem;
      font-style: italic;
      margin-bottom: 8rem;
    }

    & p {
      font-family: 'Judson', serif;
      font-size: 3.2rem;
      font-style: italic;
      width: 80%;
    }
  }

  & img:nth-child(2) {
    width: 100%;
  }

  & img:nth-child(3) {
    position: absolute;
    left: 0;
    top: 70vh;
    z-index: 2;
  }

  & span {
    position: absolute;
    left: 21.6rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 80rem;
    opacity: 0.1;
    text-transform: uppercase;
    z-index: -1;
    color: var(--color-text-purple);
  }
`;

export const DefinitionSection = styled.section`
  overflow: auto;
  padding: 4rem 3.2rem;
  background-color: var(--color-white);
  text-align: right;
  position: relative;

  & h2 {
    font-family: 'Exo', sans-serif;
    font-size: 7.2rem;
    font-style: italic;
    margin-bottom: 6.4rem;
  }

  & p {
    font-family: 'Judson', serif;
    font-size: 2.4rem;
    width: 72%;
    float: right;

    & + p {
      margin-top: 4rem;
    }
  }
`;

export const LosingTimeSection = styled.section`
  padding: 4rem 3.2rem;
  overflow: auto;
  background-color: var(--color-background-blue-dark);
  color: var(--color-text-light);

  & h2 {
    font-family: 'Exo', sans-serif;
    font-size: 7.2rem;
    font-style: italic;
    margin-bottom: 6.4rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  & p {
    font-family: 'Judson', serif;
    font-size: 2.4rem;
    margin-bottom: 4rem;
  }

  > div.container-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 3.2rem;
    row-gap: 3.2rem;
  }

  & div.card {
    background-color: var(--color-darkest-blue);
    border-radius: 1.6em;
    padding: 1.6rem;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    > div {
      display: flex;
    }

    & h3 {
      font-family: 'Exo', sans-serif;
      font-size: 4.8rem;
      margin-bottom: 0.8rem;
      text-align: center;
    }

    & p {
      margin-left: 1.6rem;
      margin-bottom: 0;
    }
  }
`;

export const BenefitsSection = styled.section`
  padding: 4rem 3.2rem;
  height: 100vh;
  color: var(--color-text-dark);
  position: relative;

  & h2 {
    font-family: 'Exo', sans-serif;
    font-size: 7.2rem;
    font-style: italic;
    margin-bottom: 6.4rem;
    margin-bottom: 4rem;
  }

  & img {
    position: absolute;
    right: 3.2rem;
    top: 4rem;
    z-index: -1;
    height: 68rem;
  }

  & ul {
    font-family: 'Exo', sans-serif;
    font-size: 2.4rem;
    font-style: italic;
    list-style: none;
    line-height: 8.8rem;

    & li {
      display: flex;
      align-items: center;

      > img.icone-relogio {
        width: 2.4rem;
        height: 2.4rem;
        position: initial;
        margin-right: 0.8rem;
      }
    }
  }
`;
