import { css } from '@emotion/react';

import RobotoItaicWoff from '@/fonts/roboto/roboto_italic/Roboto-Italic.woff';
import RobotoItaicTrueType from '@/fonts/roboto/roboto_italic/Roboto-Italic.ttf';

export const LocalFontFaces = css`
  @font-face {
    font-family: 'RobotoItalic';
    src: url(${RobotoItaicWoff}) format('woff'), url({${RobotoItaicTrueType}}) format("truetype");
    font-weight: 400
    font-style: italic;
  }
`;

export const WebFontFaces = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
`;
