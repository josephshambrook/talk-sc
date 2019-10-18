import React from "react";
import "./styles/Layout.scss";

const Layout = () => (
  <div className="grid">
    <header className="grid__item grid__item--striped grid__item--header">Header</header>
    <main className="grid__item grid__item--striped grid__item--main">Main</main>
    <aside className="grid__item grid__item--striped grid__item--sidebar">Sidebar</aside>
    <footer className="grid__item grid__item--footer">Footer</footer>
  </div>
);

export default Layout;
