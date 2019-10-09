import styled from "styled-components";

const Building = styled.div`
  border: 2px solid #fff;
  display: grid;
  grid-template-areas:
    "lr h dr"
    "lr h k";
  grid-template-columns: 3fr 1.5fr 3fr;
  grid-template-rows:1fr 1fr;
  height: 400px;
  width: 800px;
`;

export default Building;
