 import { createGlobalStyle } from 'styled-components';

 export const lightTheme = {
     body: '#fff',
     fontColor: '#000',
 }

 export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
}

export const GlobalStyles = createGlobalStyle`
    body {
        text-align: center;
        background-color: ${(props) => props.theme.body};
    }
`

