import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import { Auth } from "./pages";
import { Toast } from "./atoms";

const AppWrapper = ({ children }) => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Toast />
      {children}
    </ThemeProvider>
  );
};

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path={"/register"} element={<Auth type={"register"} />} />
          <Route path={"/login"} element={<Auth type={"login"} />} />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
