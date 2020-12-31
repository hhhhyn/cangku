import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin'
import Common from './pages/common'
import Buttons from './pages/ui/button/button'
import Home from './pages/home/home'
import Modals from './pages/ui/modals/modals'
import Spins from './pages/ui/Spin/Spin'
import Notification from './pages/ui/notification/notification'
import Messages from './pages/ui/message/message'
import Carousels from './pages/ui/carousel/carousel'
import Tablebasic from './pages/ui/tablebasic/tablebasic'
import Tablehigh from './pages/ui/tablehigh/tablehigh'
import Gallery from './pages/ui/gallery/gallery'
import City from './pages/city/city'
import RichEditor from './pages/rich/rich'
import Order from './pages/order/order'
import OrderDetail from './pages/order/orderdetail'
import Users from './pages/user/user'
import BarCharts from './pages/charts/barcharts'
import PieCharts from './pages/charts/piecharts'
import PieCharts2 from './pages/charts/piecharts2'
import LineCharts from './pages/charts/linecharts'
import Login from './pages/login/login'
import Nomatch from './pages/noMatch/nomatch'



export default class Irouter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/common" render={() => {
                            return (
                                <Common>
                                    <Route exact path="/common/order/detail/:orderId" component={OrderDetail}></Route>
                                </Common>
                            )
                        }}></Route>
                        <Route path="/" render={() => {
                            return (
                                <Admin>
                                    <Switch>
                                        <Route exact path="/home" component={Home}></Route>
                                        <Route path="/home/ui/buttons" component={Buttons}></Route>
                                        <Route path="/home/ui/modals" component={Modals}></Route>
                                        <Route path="/home/ui/loading" component={Spins}></Route>
                                        <Route path="/home/ui/notification" component={Notification}></Route>
                                        <Route path="/home/ui/message" component={Messages}></Route>
                                        <Route path="/home/ui/carousel" component={Carousels}></Route>
                                        <Route path="/home/table/basic" component={Tablebasic}></Route>
                                        <Route path="/home/table/high" component={Tablehigh}></Route>
                                        <Route path="/home/ui/gallery" component={Gallery}></Route>
                                        <Route path="/home/city" component={City}></Route>
                                        <Route path="/home/rich" component={RichEditor}></Route>
                                        <Route path="/home/order" component={Order}></Route>
                                        <Route path="/home/user" component={Users}></Route>
                                        <Route path="/home/charts/bar" component={BarCharts}></Route>
                                        <Route path="/home/charts/pic" component={PieCharts}></Route>
                                        <Route path="/home/charts/pic2" component={PieCharts2}></Route>
                                        <Route path="/home/charts/line" component={LineCharts}></Route>
                                        <Route path="/login" component={Login}></Route>
                                        <Route component={Nomatch}></Route>
                                    </Switch>
                                </Admin>
                            )
                        }}></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}