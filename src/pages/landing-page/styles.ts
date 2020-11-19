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

  & img {
    width: 100%;
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
  height: 47.2rem;
  padding: 0 3.2rem;
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
    margin-bottom: 4rem;
    width: 72%;
    float: right;
  }

  & img {
    position: absolute;
    left: 0;
    top: -48%;
  }
`;
