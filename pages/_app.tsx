import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { DarkTheme } from "../themes";
import { DefaultLayout } from "../src/layouts";
import { TitleContextProvider } from "../context/title.context";
import { useEffect } from "react";


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <NextUIProvider theme={DarkTheme}>
      
        <TitleContextProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </TitleContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
