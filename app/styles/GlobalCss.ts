import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalCss = css`
  ${emotionNormalize}
  html,
    body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }
`;

export default GlobalCss;
