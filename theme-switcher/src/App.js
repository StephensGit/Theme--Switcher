import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes';

import './App.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`
const StyledButton = styled.button`
  padding:10px;
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
`


function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler= () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h1>Theme Switcher</h1>
        <StyledButton onClick={() => themeToggler()}>Change Theme</StyledButton>
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;
