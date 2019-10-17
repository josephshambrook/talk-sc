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
    <Header as="header">Header</Header>
    <Main as="main">Main</Main>
    <Sidebar as="aside">Sidebar</Sidebar>
    <Footer as="footer">Footer</Footer>
  </Grid>
);

export default Layout;
