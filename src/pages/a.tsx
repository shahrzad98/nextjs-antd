import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Mentions, Form, Button} from 'antd';
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import Link from "next/link";

const {SubMenu} = Menu;


const A = ({stars}) => {

    // function Page({ stars }) {
    //     return <div>Next stars: {stars}</div>
    // }



    const {Option, getMentions} = Mentions;
    const [state, setState] = useState('mail');
    const handleClick = e => {
        console.log('click ', e);
        setState(e.key);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log('Submit:', values);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const checkMention = async (rule, value, callback) => {
        const mentions = getMentions(value);

        if (mentions.length < 2) {
            throw new Error('More than one must be selected!');
        }
    };
    const [form] = Form.useForm();
    return (
        <div>
            <div>Next stars: {stars}</div>
            <Link href={'/b'}>Go to B</Link>
            <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined/>}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined/>}>
                    Navigation Two
                </Menu.Item>
                <SubMenu icon={<SettingOutlined/>} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
            <div style={{marginTop: '50px'}}>
                <Form form={form} layout="horizontal" onFinish={onFinish}>
                    <Form.Item
                        name="coders"
                        label="Top coders"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 16}}
                        rules={[{validator: checkMention}]}
                    >
                        <Mentions rows="1">
                            <Option value="afc163">afc163</Option>
                            <Option value="zombieJ">zombieJ</Option>
                            <Option value="yesmeck">yesmeck</Option>
                        </Mentions>
                    </Form.Item>
                    <Form.Item
                        name="bio"
                        label="Bio"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 16}}
                        rules={[{required: true}]}
                    >
                        <Mentions rows="3" placeholder="You can use @ to ref user here">
                            <Option value="afc163">afc163</Option>
                            <Option value="zombieJ">zombieJ</Option>
                            <Option value="yesmeck">yesmeck</Option>
                        </Mentions>
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 14, offset: 6}}>
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

A.propTypes = {};

export default A;