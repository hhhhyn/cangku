import React from "react";
import { Button, Menu, Dropdown, } from "antd";
// import { DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
        </a>
        </Menu.Item>
    </Menu>
);

export default class Modals extends React.Component {

    render() {
        return (
            <div>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Button>bottomLeft</Button>
                </Dropdown>


            </div>
        );
    }
}
