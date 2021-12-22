import React from 'react';

import StyledBanner from './StyledBanner';
import { ReactComponent as Emoji } from '@/images/icons/emoji.svg';

export interface Props {
  message: string;
  host?: string;
}

const Banner = (props: Props) => (
  <StyledBanner>
    <Emoji style={{ height: '98px' }} />
    <h1>
      {props.host} {props.message}
    </h1>
    <p>Happy hacking</p>
  </StyledBanner>
);

export default Banner;
