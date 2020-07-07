import React from 'react';
import 'antd/dist/antd.css'
import {AppProps} from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
