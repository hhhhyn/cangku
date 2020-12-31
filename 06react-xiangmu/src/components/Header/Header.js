import React from 'react'
import { Row, Col } from 'antd'
import logo2 from '../../resource/assets/logo-ant.svg'
import './Header.less'
import Util from '../../utils/utils'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "郭憨憨"
        }
    }
    componentWillMount() {
        setInterval(() => {
            let sysTime = Util.formateDate(new Date());
            this.setState({
                sysTime
            })
        }, 1000);
    }
    render() {
        let { menuName, menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    {menuType ? (
                        <Col span="6" className="logo">
                            <img src={logo2} width="60" alt=""></img>
                            <span>IMooc通用管理系统</span>
                        </Col>
                    ) : (
                            ""
                        )}
                    <Col span={menuType ? 18 : 24}>
                        <span>欢迎：{this.state.userName}</span>
                        <a href="xxx">退出</a>
                    </Col>
                    {/* <Col span="24">
                        <span>欢迎：{this.state.userName}</span>
						<a href="xxx">退出</a>
                </Col> */}
                </Row>
                <Row className="breadcrumb">
                    <Col span="6" className="breadcrumb-title">
                        {menuName || "首页"}
                    </Col>
                    <Col span="18" className="weather">
                        <span className="date">{this.state.sysTime}</span> &nbsp;
                {/* <span>去用百度天气API来免费获取接口</span> */}
                        <span className="weather-detail">扬沙转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }

}
export default Header;
