import { createGlobalStyle } from 'styled-components'
import { fadeInOpacity } from './animations/fadeInOpacity'
import PressStart2P from '../fonts/PressStart2P.ttf'

export const primaryFont = 'PressStart2P'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  @font-face {
    font-family: PressStart2P;
    src: url(${PressStart2P}) format('truetype');
  }

  body, html {
	animation: ${fadeInOpacity} 500ms ease-in;
  }

  p, span, h1, h2, h3, h4, h5, h6 {
  font-family: PressStart2P, cursive;
  }
`
// För desktopNav

export const primaryColor = '#f59300'
export const secondaryFont = 'AlegreyaSans'