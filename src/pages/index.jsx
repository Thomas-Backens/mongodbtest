import React, { ReactElement } from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import List from "../components/List";
// import Hymns from "../components/Hymns";
// import Topbar from "../components/Topbar";

// const Home: React.FC = (): ReactElement =>
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <List />
      {/* <Topbar />
      <Hymns /> */}
      {/* <img src="/logo.svg" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a> */}
    </ThemeProvider>
  );
}

// export default Home;
