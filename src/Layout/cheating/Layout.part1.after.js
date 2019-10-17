import React from "react";
import Grid from "./Grid/Grid";

const Layout = () => (
  <Grid>
    <Grid.Item>Header</Grid.Item>
    <Grid.Item>Main</Grid.Item>
    <Grid.Item>Sidebar</Grid.Item>
    <Grid.Item>Footer</Grid.Item>
  </Grid>
);

export default Layout;
