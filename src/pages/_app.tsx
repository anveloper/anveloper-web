import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import wrapper, { persistor } from "../store";
import "../styles/globals.css";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider attribute="class">
          <Component {...props.pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
