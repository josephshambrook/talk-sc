import React from "react";
import styled from "styled-components";
import Grid from "./Grid/Grid";

const Header = styled(Grid.Item)`
  grid-area: header;
`;

const Main = styled(Grid.Item)`
  grid-area: main;
`;

const Sidebar = styled(Grid.Item)`
  grid-area: sidebar;
`;

const Footer = styled(Grid.Item)`
  grid-area: footer;
`;

const Layout = () => (
  <Grid>
    <Header>Header</Header>
    <Main>Main</Main>
    <Sidebar>Sidebar</Sidebar>
    <Footer>Footer</Footer>
  </Grid>
);

export default Layout;
