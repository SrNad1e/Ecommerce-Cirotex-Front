import { Badge, Button, Dropdown, Layout, Menu, MenuProps, Image, List, Avatar } from 'antd';
import Input from 'antd/es/input';
import Card from 'antd/es/card';
import { Col, Row } from 'antd/es/grid';
import { EditOutlined, EllipsisOutlined, HeartOutlined, MehOutlined, SearchOutlined, SettingOutlined, ShoppingCartOutlined, ShoppingOutlined, SmileOutlined } from '@ant-design/icons';
import Typography from 'antd/es/typography';
import { useEffect, useState } from 'react';
import Meta from 'antd/es/card/Meta';
import Login from './login';


const { Text, Title } = Typography

const { Header, Content, Footer } = Layout;
const Home = () => {
    const [openLogin, setOpenLogin] = useState(false)
    const [isLogged, setIsLogged] = useState(false)


    const userRegister = () => {
        fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                username: "MrNobody",
                password: "1234",
                roles: ['user']
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json()).then(json => console.log(json))
    }


    const userLogout = () => {
        sessionStorage.removeItem('token')
        setIsLogged(false)
        setOpenLogin(true)
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Perfil'
        },
        {
            key: '2',
            label: 'Configuración',
        },
        {
            key: '3',
            danger: true,
            label: 'Salir',
            onClick: () => userLogout()
        },
    ];

    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
    ];

    useEffect(() => {
        setOpenLogin(true)
    }, [])

    return (
        <Layout className="layout">
            <Card style={{ display: 'flex', justifyContent: 'center', height: 75 }}>
                <Row gutter={40} align='middle'>
                    <Col style={{ right: 100 }}>
                        <ShoppingOutlined style={{ fontSize: 45 }} />
                        <Text italic strong >Cirotex</Text>
                    </Col>
                    <Col>
                        <Input style={{ width: 650 }} placeholder="¿Que tienes en mente?" />
                        <Button onClick={() => userRegister()} type="primary" style={{ borderRadius: 6, backgroundColor: 'black' }} icon={<SearchOutlined />}>
                            Buscar
                        </Button>
                    </Col>
                    <Col style={{ left: 150 }} >
                        <Button icon={<HeartOutlined style={{ fontSize: 30, color: 'red' }} />} style={{ border: 'none' }} />
                    </Col>
                    <Col style={{ left: 170 }} >
                        <Badge count={1}>
                            <Button icon={<ShoppingCartOutlined style={{ fontSize: 30 }} />} style={{ border: 'none' }} />
                        </Badge>
                    </Col>
                    <Col style={{ left: 190 }} >
                        {
                            !isLogged ? <Button onClick={isLogged ? () => { } : () => setOpenLogin(true)} icon={<MehOutlined style={{ fontSize: 30 }} />} style={{ border: 'none' }} /> : <Dropdown menu={{ items }}>
                                <Button icon={<SmileOutlined style={{ fontSize: 30 }} />} style={{ border: 'none' }} />
                            </Dropdown>
                        }
                    </Col>
                </Row>
            </Card>
            <Header style={{ display: 'flex', justifyContent: 'center' }}>
                <Row gutter={40}>
                    <Col >
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={[{
                                label: 'Hombre',
                                key: '1',
                                children: [
                                    {
                                        label: 'Camisas',
                                        key: 'setting:1'

                                    },
                                    {
                                        label: 'Camisetas',
                                        key: 'setting:2'
                                    },
                                    {
                                        label: 'Pantalones',
                                        key: 'setting:3'
                                    },
                                ]

                            },
                            {
                                style: { marginLeft: 100, marginRight: 100 },
                                label: 'Mujer',
                                key: '2',
                                children: [
                                    {
                                        label: 'Vestidos',
                                        key: 'setting:1'

                                    },
                                    {
                                        label: 'Blusas',
                                        key: 'setting:2'
                                    },
                                    {
                                        label: 'Pantalones',
                                        key: 'setting:3'
                                    },
                                ]

                            },
                            {
                                label: 'Tela',
                                key: '3',
                                children: [
                                    {
                                        label: 'Fibra',
                                        key: 'setting:1'
                                    },
                                ]

                            }
                            ]}
                        />
                    </Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Row style={{ marginLeft: 120 }}>
                    <Col>
                        <div style={{ background: 'white', width: 350, marginTop: 20, borderRadius: 10, padding: 0 }}>
                            <Card hoverable style={{ width: 350 }}>
                                <Image width={300} preview={false} style={{ borderRadius: 10 }} height={250} src='https://i.pinimg.com/originals/5c/07/66/5c0766c4a12a827e9a276e06b01e096d.jpg' />
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ background: 'white', width: 350, marginTop: 20, borderRadius: 10, padding: 0 }}>
                            <Card hoverable style={{ width: 850 }}>
                                <Image preview={false} style={{ borderRadius: 10 }} height={250} src='https://tennis.vtexassets.com/arquivos/20230117-BANNER-CATEGORIA-MOBILE.jpg?v=638095853145070000' />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
                <Text style={{ marginRight: 1250, fontSize: 30 }} italic strong >Más Vendidos</Text>
                <Col >
                    <List
                        grid={{ gutter: 0, column: 5 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item >
                                <Card
                                    style={{ width: 250, height: 300 }}
                                    cover={
                                        <Image
                                            preview={false}
                                            height={150}
                                            width={250}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <HeartOutlined key="heart" />,
                                        <EditOutlined key="edit" />,
                                        <ShoppingCartOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        style={{ height: 100 }}
                                        title={item.title}
                                        description="Lorem ipsum utate. Donec vitae nulla at mauris ullamcorper placerat. Aliquam finibus, nunc"
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Text style={{ marginTop: 100, marginRight: 980, fontSize: 30 }} italic strong >Más populares en esta temporada</Text>
                <Col >
                    <List
                        grid={{ gutter: 0, column: 5 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item >
                                <Card
                                    style={{ width: 250, height: 300 }}
                                    cover={
                                        <Image
                                            preview={false}
                                            height={150}
                                            width={250}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <HeartOutlined key="heart" />,
                                        <EditOutlined key="edit" />,
                                        <ShoppingCartOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        style={{ height: 100 }}
                                        title={item.title}
                                        description="Lorem ipsum utate. Donec vitae nulla at mauris ullamcorper placerat. Aliquam finibus, nunc"
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            <Footer style={{ textAlign: 'center', marginTop: 200 }}>Cirotex ©2023</Footer>
            <Login setIsLogged={setIsLogged} visible={openLogin} onCancel={() => setOpenLogin(false)} />
        </Layout>
    );
};

export default Home;