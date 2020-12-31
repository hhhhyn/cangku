import React, { Component } from 'react';
import { Button, notification, Divider, Space } from 'antd';
import { RadiusUpleftOutlined, RadiusUprightOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined } from '@ant-design/icons';

const openNotification = placement => {
    notification.info({
        message: `Notification ${placement}`,
        description:
            '哈哈哈',
        placement,
    });
}
class Notification extends Component {
    render() {
        return (
            <div>
                <Space>
                    <Button type="primary" onClick={() => openNotification('topLeft')}>
                        <RadiusUpleftOutlined />
                        左上
                    </Button>
                    <Button type="primary" onClick={() => openNotification('topRight')}>
                        <RadiusUprightOutlined />
                        右上
                    </Button>
                </Space>
                <Divider />
                <Space>
                    <Button type="primary" onClick={() => openNotification('bottomLeft')}>
                        <RadiusBottomleftOutlined />
                        左下
                    </Button>
                    <Button type="primary" onClick={() => openNotification('bottomRight')}>
                        <RadiusBottomrightOutlined />
                        右下
                    </Button>
                </Space>
            </div>
        )

    }
}

export default Notification;