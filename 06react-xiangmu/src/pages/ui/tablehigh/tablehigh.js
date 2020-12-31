import React from 'react'
import { Table, Tag, Space } from 'antd'

export default class Tablehigh extends React.Component {
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a href="/#">{text}</a>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render: (sex) => sex === 1 ? '男' : '女',
            },
            {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                render: (tags) => (
                    <div>
                        {tags.map((item) => {
                            let color = item.length > 5 ? 'geekblue' : 'green'
                            if (item === 'loser') {
                                color = '#a3e'
                            }
                            return (
                                <Tag color={color} key={item}>
                                    {item.toUpperCase()}
                                </Tag>
                            )
                        })}
                    </div>
                ),
            },
            {
                title: '安康信',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a href="/#">Invite {record.name}</a>
                        <a href="/#">Delete</a>
                    </Space>
                ),
            },
            {
                title: 'degree',
                dataIndex: 'degree',
                key: 'degree',
                render: (degree) => (
                    <div>
                        {degree.map((index) => {
                            let color = (index > 60) ? 'green' : 'red'
                            return (
                                <Tag color={color} key={index}>
                                    {index}
                                </Tag>
                            )
                        })}
                    </div>
                )
            },
            {
                title: '国家',
                key: 'city',
                dataIndex: 'city',
                render: (city) => (
                    <div>
                        {city.map((item) => {
                            let color = (item === "中国") ? 'red' : 'green'
                            return (
                                <Tag color={color} key={item}>
                                    {item}
                                </Tag>
                            )
                        })}
                    </div>
                ),
            },
        ]
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                sex: 1,
                tags: ['nice', 'developer'],
                degree: [56, 76, 45, 99],
                city: ['中国', '俄罗斯', '加拿大'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                sex: 0,
                tags: ['loser'],
                degree: [93, 37, 66, 28],
                city: ['中国', '俄罗斯', '加拿大'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                sex: 1,
                tags: ['cool', 'teacher', 'student'],
                degree: [34, 76, 69, 35],
                city: ['中国', '俄罗斯', '加拿大'],
            },
        ]

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
