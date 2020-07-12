import React from 'react';
import {Drawer} from 'antd';
import {NextPage, NextPageContext} from 'next';
import Head from 'next/head'
import {useState} from "react";
import Link from "next/link";
import axios from 'axios'
// import FastClick from 'FastClick'

import {Badge, Button, List} from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';


interface Props {
    stars: object;
}

const Home: NextPage<Props> = ({stars}) => {




    const PlaceHolder = ({ className = '', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>Block</div>
    );

    Home.getInitialProps = async (ctx) => {
        const res = await axios.get('https://api.github.com/repos/vercel/next.js')
        return {stars: res.data}
    }
    console.log(stars)

    const [state, setState] = useState({visible: false});

    const showDrawer = () => {
        setState({
            visible: true,
        });
    };

    const onClose = () => {
        setState({
            visible: false,
        });
    };
    console.log(process.env.NEXT_PUBLIC_DB_USER)

    const tabs = [
        { title: <Badge text={'3'}>First Tab</Badge> },
        { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
        { title: <Badge dot>Third Tab</Badge> },
    ];

    const tabs2 = [
        { title: 'First Tab', sub: '1' },
        { title: 'Second Tab', sub: '2' },
        { title: 'Third Tab', sub: '3' },
    ];

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1" />
                <link rel='stylesheet' type='text/css' href='//unpkg.com/antd-mobile@2.0.0-beta.2/dist/antd-mobile.min.css' />
                {/*<script>*/}
                {/*    if ('addEventListener' in document) {*/}
                {/*    document.addEventListener('DOMContentLoaded', function() {*/}
                {/*        FastClick.attach(document.body);*/}
                {/*    }, false)*/}
                {/*}*/}
                {/*    if(!window.Promise) {*/}
                {/*    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>')*/}
                {/*}*/}
                {/*</script>*/}
            </Head>



            <div>
                <Tabs tabs={tabs}
                      initialPage={1}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
                <Tabs tabs={tabs2}
                      initialPage={1}
                      tabBarPosition="bottom"
                      renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
            <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <List.Item
                    extra={<Button type="ghost" size="small" inline>small</Button>}
                    multipleLine
                >
                    Regional manager
                    <List.Item.Brief>
                        Can be collected, refund, discount management, view data and other operations
                    </List.Item.Brief>
                </List.Item>
                <List.Item
                    extra={<Button type="primary" size="small" inline>small</Button>}
                    multipleLine
                >
                    Regional manager
                    <List.Item.Brief>
                        Can be collected, refund, discount management, view data and other operations
                    </List.Item.Brief>
                </List.Item>
            </List>
                <Button> default </Button>



            <div className="container">
                {stars}


                <Link href={'/a'}>Go to A</Link>
                <div className="site-drawer-render-in-current-wrapper">

                    <div style={{marginTop: 16}}>

                        {/*<Button type="primary" onClick={showDrawer}>*/}
                        {/*    Open*/}
                        {/*</Button>*/}
                        {/*<Button type="primary" onClick={showDrawer}>*/}
                        {/*    Open*/}
                        {/*</Button>*/}
                    </div>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={state.visible}
                        getContainer={false}
                        style={{position: 'absolute'}}
                    >
                        <p>Some contents...</p>
                    </Drawer>
                </div>

                <footer>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt=" Logo" className="logo"/>
                    </a>

                </footer>

                <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            </div>
        </>
    )
}

export default Home;