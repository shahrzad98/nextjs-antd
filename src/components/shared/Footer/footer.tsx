import * as React from 'react';
import styles from '../../../scss/partial/footer.module.scss';
import Link from "next/link";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <div className={styles.footer_container}>


            <div>
                <Link href={'/'}>
                    <img src="favoutite_icon(3).png" alt=""/>
                </Link>
            </div>

            <div>
                <Link href={'/'}>
                    <img src="favoutite_icon(3).png" alt=""/>
                </Link>
            </div>

            <div>
                <Link href={'/'}>
                    <img src="home_icon(1).png" alt=""/>
                </Link>
            </div>

            <div>
                <Link href={'/'}>
                    <img src="favoutite_icon(3).png" alt=""/>
                </Link>
            </div>

            <div>
                <Link href={'/'}>
                    <img src="favoutite_icon(3).png" alt=""/>
                </Link>
            </div>

        </div>
    );
};