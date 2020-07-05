import * as React from 'react';
import CardLeague from "../../components/card";
import {Row, Col} from "antd";
import Link from "next/link";

const B = (props) => {
    return (
        <>
            <Link href={'/'}>Go home</Link>
            <Row justify={'center'} style={{marginTop: '50px'}}>

                <Col span={4}><CardLeague/></Col>
                <Col span={4}><CardLeague/></Col>
                <Col span={4}><CardLeague/></Col>
                <Col span={4}><CardLeague/></Col>
            </Row>
        </>
    );
};

export default B