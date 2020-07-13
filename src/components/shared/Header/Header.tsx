import * as React from 'react';
import styles from "../../../scss/partial/header.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

type Props = {

};
const Header = (props: Props) => {
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
                    <span className={styles.header_notification}></span>
                    <img src="bell (2).png" alt=""/>
                </div>


                <div>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>

            </div>


        </div>
    );
};

export default Header