import React from "react";
import styled from 'styled-components';
import Button from "./Button";

const Column = styled.div`
  display: flex;
  flex-direction: row;

  > button {
    margin-right: 10px;
  }
`;

const App = () => (
  <div className="content">
    <Column>
      <Button>Normal button</Button>
      <Button.Success>Miraculously fine</Button.Success>
      <Button.Danger>Screwed up</Button.Danger>
      <Button.Info>Informative eh?</Button.Info>
    </Column>
  </div>
);

export default App;
