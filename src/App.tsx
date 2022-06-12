import { CrudProductProvider } from "./hooks/useCrudProduct";

import { Router } from "./router";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <CrudProductProvider>
      <Router />
      <GlobalStyle />
    </CrudProductProvider>
  );
}

export default App;
