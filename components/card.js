import React from 'react'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './card.module.scss'

const { Meta } = Card;

class CardLeague extends React.Component {
    state = {
        loading: true,
    };

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;

        return (
            <div className={styles.card_container}>
                <Switch checked={!loading} onChange={this.onChange} />

                <Card style={{ width: 300, marginTop: 16 }} loading={loading} >
                    <img src="https://cdn.sportmob.com/resource/tournament/5c4036e543b1f83cdc005142_light/icon.png?d=48_48" alt=""/>
                </Card>

                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Skeleton loading={loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </div>
        );
    }
}

export default CardLeague