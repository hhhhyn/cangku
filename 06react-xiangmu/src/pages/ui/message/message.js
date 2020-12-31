import React, { Component } from 'react';
import { Button, Space, message } from 'antd';

class Messages extends Component {
    render() {
        return (
            <div>
                <Space>
                    <Button size="large" onClick={() => {
                        message.success('This is a success message')
                    }}>Success</Button>
                    <Button onClick={() => {
                        message.error('This is a error message')
                    }}>Error</Button>
                    <Button size="small" type="ghost" onClick={() => {
                        message.warning('This is a warning message')
                    }}>Warning</Button>
                </Space>
            </div>
        );
    }
}

export default Messages;