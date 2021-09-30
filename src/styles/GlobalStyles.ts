import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    // Colors
    --navy: #14213d;
    --light-grey: #e5e5e5;
    --blue: #0d00a4;
    --yellow: #fca311;
    --dark-blue: #04052e;
    --off-white: #f7f7f7;

    // Font Size
    --font-size-large: 1.8rem;
    --font-size-small: 1.4rem;

    // Spacing
    --s-size: 1.0rem;
    --m-size: 1.6rem;
    --l-size: 3.2rem;
    --xl-size: 4.8rem;
    --desktop-breakpoint: 45rem;
  }

  body {
    background: var(--light-grey);
    font-family: 'Open Sans', sans-serif;
    font-size: var(--m-size);
    line-height: 1.6;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  [role='tooltip'].popup-content {
    width: 300px;
    color: var(--yellow);
    line-height: 2;
    background: var(--navy);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  }

  .is-active {
    font-weight: bolder;
  }
`;
