import React from 'react';
import styles from '../scss/partial/header.module.scss';
import {NextPage, NextPageContext} from 'next';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Button} from 'antd';
import {Drawer} from 'antd';
import Head from 'next/head'
import {useState} from "react";
import Link from "next/link";
import axios from 'axios'
import {NavBar, Icon} from 'antd-mobile';
// import FastClick from 'FastClick'

import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';


interface Props {
    stars: object;
}

const Home: NextPage<Props> = ({stars}) => {

    return (
        <div className={styles.header_container}>
            <nav>

                <img src="logo-darkBG.png" alt=""/>

                <div className={styles.header_container__button}>
                    <span> OPEN IN APP </span>
                </div>
            </nav>
            <div className={styles.header_accessButtons__container}>

                <div>
                    <img src="zoom.png" alt=""/>
                </div>
                <div>
                    <img src="bell (2).png" alt=""/>
                </div>

                <div>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>

            </div>


        </div>
    )
}

export default Home;

