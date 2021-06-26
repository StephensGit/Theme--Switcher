 import { createGlobalStyle } from 'styled-components';

 export const lightTheme = {
     body: '#fff',
     fontColor: '#000',
     buttonBackgroundColor: '#333',
     buttonColor: '#fff',
 }

 export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    buttonBackgroundColor: '#fff',
    buttonColor: '#333',
}

export const GlobalStyles = createGlobalStyle`
    body {
        text-align: center;
        margin: auto;
        background-color: ${(props) => props.theme.body};
    }
`

