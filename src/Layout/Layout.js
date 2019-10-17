import React from "react";
import styled from "styled-components";
import Grid from "./Grid/Grid";

const StripedElement = styled(Grid.Item)`
  --stripe-color: #093ecd;

  background-image: linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent 100%);
  background-size: 56.57px 56.57px;
`;

const Header = styled(StripedElement)`
  grid-area: header;
`;

const Main = styled(StripedElement)`
  --stripe-color: #240579;
  grid-area: main;
`;

const Sidebar = styled(StripedElement)`
  --stripe-color: #01B3C3;
  grid-area: sidebar;
`;

const Footer = styled(StripedElement)`
  grid-area: footer;
`;

const Layout = () => (
  <Grid>
    <Header as="header">Header</Header>
    <Main as="main">Main</Main>
    <Sidebar as="aside">Sidebar</Sidebar>
    <Footer as="footer">Footer</Footer>
  </Grid>
);

export default Layout;
