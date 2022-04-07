import "./App.css";
import NavBar from "./content";
import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#000000",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: localStorage.getItem("dark"),
      theme:
        localStorage.getItem("dark") === "true"
          ? createTheme(darkTheme)
          : createTheme(lightTheme),
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount() {
    document
      .getElementById("dark-mode")
      .addEventListener("click", this.changeTheme);
  }
  changeTheme() {
    if (this.state.theme.palette.mode === "light") {
      this.setState({ theme: createTheme(darkTheme) });
    } else {
      this.setState({ theme: createTheme(lightTheme) });
    }
    console.log(this.state.theme);
  }
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={this.state.theme}>
          <CssBaseline />
          <NavBar />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
