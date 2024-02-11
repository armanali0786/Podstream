import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from './pages/Dashboard';
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import PodcastDetails from "./pages/PodcastDetails";
import DisplayPodcast from "./pages/DisplayPodcast";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  widtth: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              setMenuOpen={setMenuOpen}
              menuOpen={menuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}

          <Frame>
            <NavBar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <Routes>
              <Route path="/" exact element={<Dashboard/>}></Route>
              <Route path="/search" exact element={<Search/>}></Route>
              <Route path="/favourites" exact element={<Favourites/>}></Route>
              <Route path="/profile" exact element={<Profile/>}></Route>
              <Route path="/podcast/:id" exact element={<PodcastDetails/>}></Route>
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast/>}></Route>
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
