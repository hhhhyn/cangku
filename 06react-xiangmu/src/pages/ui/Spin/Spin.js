import React, { Component } from 'react';
import { Spin, Alert } from 'antd';

class Spins extends Component {
    render() {
        return (
            <div>
                <Spin tip="Loading...">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"/>
                </Spin>,
            </div>
        );
    }
}

export default Spins;