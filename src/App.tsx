import React from "react";
import { AppBar, Toolbar, IconButton, CssBaseline } from "@mui/material";
import LocationIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha, ThemeProvider, useTheme } from "@mui/material/styles";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
