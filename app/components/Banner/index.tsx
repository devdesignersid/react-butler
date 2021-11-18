import React from 'react';

import StyledBanner from './StyledBanner';

export interface Props {
  message: string;
  host?: string;
}

const Banner = (props: Props) => (
  <StyledBanner>
    <h1>
      {props.host} {props.message}
    </h1>
    <p>Happy hacking</p>
  </StyledBanner>
);

export default Banner;
