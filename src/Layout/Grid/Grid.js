import styled from 'styled-components';
import { string } from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  grid-template-rows: 6rem 1fr 1fr 6rem;
  min-height: 100vh;
  padding: 0.5rem;
  width: 100vw;

  @media (min-width: 40rem) {
    display: grid;
    grid-template-areas:
      "header header"
      "main sidebar"
      "footer footer";
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 6rem 1fr 6rem;
  }
`;

Grid.Item = styled.div`
  align-items: center;
  border: 3px dashed #fff;
  color: #fff;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;

  ${({ area }) => `grid-area: ${area};`}
`;

Grid.Item.propTypes = {
  area: string
}

Grid.Item.defaultProps = {
  area: ''
}

export default Grid;
