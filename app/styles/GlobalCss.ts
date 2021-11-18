import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { WebFontFaces, LocalFontFaces } from './FontFaces';

const GlobalCss = css`
  ${WebFontFaces}
  ${emotionNormalize}
  html,
    body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }

  ${LocalFontFaces}
`;

export default GlobalCss;
