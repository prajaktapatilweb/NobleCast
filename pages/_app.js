import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../components/home/heroadd/hero1.css";
import "slick-carousel/slick/slick-theme.css";


// import "../styles/globals.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>
                NOBLE CAST INC.
                                </title>
                                <meta name="title" content="NOBLE CAST INC."></meta>
                              
     
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
