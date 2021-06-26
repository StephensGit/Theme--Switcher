import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes';

import './App.css';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
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
        Theme Switcher
        <button onClick={() => themeToggler()}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>

  );
}

export default App;
