import React from "react";
import { Card, Button } from "antd";

export default class Buttons extends React.Component {
    
    render() {
        return (
            <div>
                <Card title="Button">
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                </Card>
               
            </div>
        );
    }
}
