import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @-webkit-keyframes animatedBackground {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 20% 0%;
    }
  }
  @keyframes animatedBackground {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 20% 0%;
    }
  }
  @keyframes animatedOverlay {
    0% {
      opacity: 100%;
    }
    20% {
      opacity: 66%;
    }
    80% {
      opacity: 66%;
    }
    100% {
      opacity: 100%;
    }
  }

  /* Fix for Bootstrap modal glitch */
  .modal-open {
    padding-right: 0px !important;
  }
`;
