import React from 'react';
import {NextPage} from 'next';
// import FastClick from 'FastClick'
import Header from "../components/shared/Header/Header";
import {Footer} from "../components/shared/Footer/footer";


interface Props {
    stars: object;
}

const Home: NextPage<Props> = ({stars}) => {

    return (
        <>
            <Header/>
            <Footer/>
        </>
    )
}

export default Home;

