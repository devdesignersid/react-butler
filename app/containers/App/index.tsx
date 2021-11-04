import * as React from "react";
import { Global } from "@emotion/react";

import AppContainer from "./AppContiner";
import { GlobalCss } from "@/styles";
import Banner from "@/components/Banner";

const App = () => (
  <AppContainer>
    <Global styles={GlobalCss} />
    <Banner host="🤵‍♂️ " message="is ready to serve!" />
  </AppContainer>
);

export default App;
