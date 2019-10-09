import React from "react";
import styled from "styled-components";
import Grid from "./Grid/Grid";
import Element from "./Element/Element";

const Header = styled(Element)`
  grid-area: header;
`;

const StripedHeader = styled(Header)`
  background-image: linear-gradient(45deg, #093ecd 25%, transparent 25%, transparent 50%, #093ecd 50%, #093ecd 75%, transparent 75%, transparent 100%);
  background-size: 56.57px 56.57px;
`;

const Main = styled(Element)`
  grid-area: main;
`;

const Sidebar = styled(Element)`
  grid-area: sidebar;
`;

const Footer = styled(Element)`
  grid-area: footer;
`;

const Layout = () => (
  <Grid>
    <StripedHeader as="header">Header</StripedHeader>
    <Main as="main">Main</Main>
    <Sidebar as="aside">Aside</Sidebar>
    <Footer as="footer">Footer</Footer>
  </Grid>
);

export default Layout;
