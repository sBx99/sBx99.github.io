import { createGlobalStyle } from "styled-components";

// fonts
import avaraWoff from "../assets/fonts/avara.woff";
import avaraWoff2 from "../assets/fonts/avara.woff2";

export const lightTheme = {
    background: "var(--white)",
    color: "var(--black)",
    heartToggle: "../assets/theme-switcher/dark-theme-heart.gif",
    whoDis: "../assets/new-website/light-theme.gif",
    link: {
        color: "var(--pink)",
        underline: "var(--purple)",
        background: "var(--transparentPurple)",
        shadow: "var(--purple)",
    },
};

export const darkTheme = {
    background: "var(--black)",
    color: "var(--white)",
    heartToggle: "../assets/theme-switcher/light-theme-heart.gif",
    whoDis: "../assets/new-website/dark-theme.gif",
    link: {
        color: "var(--purple)",
        underline: "var(--pink)",
        background: "var(--transparentPink)",
        shadow: "var(--pink)",
    },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Avara";
    src: url(${avaraWoff2}) format("woff2"),
        url(${avaraWoff}) format("woff");
    font-style: normal;
    font-weight: normal;
    display: swap;
  }

    * {
      --black: #0F0F0F;
      --white: #F0F0F0;
      --pink: #E838FF;
      --purple: #6F38FF;
      --transparentPink: #E838FF55;
      --transparentPurple: #6F38FF55;
    }

    html {
        margin: 0;
        padding: 0;
        height: 100%
    }

    body {
        display: flex;
	      flex-direction: column;
  	    align-items: center;
  	    justify-content: center;
        height: 100vh;
        max-width: 100vw;

  	    text-align: center;
        font-family: "Avara", serif;
  	    background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.color};
        transition: all 0.25s linear;
    }

    ::selection {
      background-color: var(--transparentPink);
      color: ${({ theme }) => theme.color};
      border-bottom: 2px solid var(--white);
    }

    ::-moz-selection {
      background-color: var(--transparentPink);
      color: ${({ theme }) => theme.color};
      border-bottom: 2px solid var(--white);
    }

    @media screen and (max-width: 600px) {
        img {
          width: 95vw;
        }
    }
`;

export default GlobalStyle;
