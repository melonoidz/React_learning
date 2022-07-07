import React from "react";
import { render } from "react-dom";
import ColorProvider from "./ColorProvider";
import App from "./App";

render(
  // ColorProviderで挟んでいる
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
