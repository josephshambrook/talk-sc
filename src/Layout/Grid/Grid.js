import styled from 'styled-components';

const Grid = styled.div`
  min-height: 100vh;
  padding: 10px;
  width: 100vw;

  @media (min-width: 40rem) {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 6rem 1fr 6rem;
  }
`;

export default Grid;
