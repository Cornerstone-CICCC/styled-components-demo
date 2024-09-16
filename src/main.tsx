import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { GlobalStyle } from "./theme/global.ts";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
