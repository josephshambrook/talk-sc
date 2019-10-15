import styled from "styled-components";
c

const Element = styled.div`
  align-items: center;
  border: 3px dashed #fff;
  color: #fff;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;

  ${({ area }) => `grid-area: ${area};`}
`;

Element.propTypes = {
  area: string
}

Element.defaultProps = {
  area: ''
}

export default Element;
