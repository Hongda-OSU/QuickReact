import React from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RouteDispatcher from "./components/route/RouterDispatcher";
import "./index.less";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

const color = "rgba(0, 0, 0, 1)";
const theme = createTheme({
  palette: {
    common: { black: color, white: color },
    primary: { main: color, dark: color, light: color },
    text: { primary: color, secondary: color },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `3px solid ${color}`,
        },
      },
    },
  },
});

appRoot.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <RouteDispatcher />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
