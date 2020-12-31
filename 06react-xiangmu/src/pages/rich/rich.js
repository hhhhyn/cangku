import React, { Component } from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';


class RichEditor extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.richEditor();
    }

    richEditor = () => {
        let element = this.refs['editor'];
        new Simditor({
            textarea: element,
            toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']
        });
    }

    render() {
        return (
            <div>
                <textarea ref="editor" placeholder="只需这一行就可以实现富文本编辑器，很nice啊"></textarea>
            </div>
        );
    }
}

export default RichEditor;