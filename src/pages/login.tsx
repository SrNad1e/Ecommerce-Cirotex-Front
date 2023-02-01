import { GoogleOutlined, ShoppingOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Form, Input, Modal, Row, Typography } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from "react"

const { Text } = Typography

type Props = {
    visible: boolean,
    onCancel: () => void,
    setIsLogged: any
}


const Login = ({ visible, onCancel, setIsLogged }: Props) => {
    const userLogin = () => {
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: "MrNobody",
                password: "1234",
            }),
            headers: {
                "Content-type": "application/json"
            },
            mode: 'cors'
        }).then(response => response.json()).then(json => console.log(json)).then(() => setIsLogged(true)).then(() => onCancel())
    }

    return (
        <Modal width={400} open={visible} onCancel={onCancel} footer={<></>}>
            <Form layout="vertical" >
                <Row justify={'center'} gutter={[0, 10]} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col>
                        <ShoppingOutlined style={{ fontSize: 45 }} />
                        <Text italic strong >Cirotex</Text>
                    </Col>
                    <Col style={{ marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontSize: 15 }} italic strong >Bienvenido, Accede para una mejor experiencia</Text>
                    </Col>
                    <Col span={24}>
                        <FormItem >
                            <Input placeholder="Ingrese nombre de usuario" />
                        </FormItem>
                    </Col>
                    <Col span={24}>
                        <FormItem >
                            <Input placeholder="Ingrese contraseña" />
                        </FormItem>
                    </Col>
                    <Col span={24}>
                        <Button onClick={() => userLogin()} style={{ marginLeft: 120, backgroundColor: 'black', color: 'white' }}>Continuar</Button>
                    </Col>
                    <Col>
                        ¿No tienes cuenta?{' '}<Button style={{ padding: 0 }} type="link">Registrate</Button>
                    </Col>
                </Row>
            </Form>
            <Divider>
                O
            </Divider>
            <Row justify={'center'}>
                <Col>
                    <Button size="large" icon={<GoogleOutlined />}>Continue con Google</Button>
                </Col>
            </Row>
        </Modal>
    )
}

export default Login