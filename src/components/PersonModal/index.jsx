import React, { Component } from 'react';
import { Modal, Form, Button, Input, Select, } from 'antd';
import 'antd/dist/antd.css'; 

const api = 'https://localhost:5001/api';

export class PersonModal extends Component {

    handleSubmit = values => {
        const { data, } = this.props;
        const sendData = {
            personID: data.personID,
            ...values,
            photoURL: data.photoURL,
         }
        this.updateProfile(sendData);
        this.props.handleClose();
    }

    updateProfile = (data) => {
        const { getProfiles, } = this.props;
        fetch(`${api}/changestudent/${data.personID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(() => getProfiles())
    }

    render() {
        const { visible, handleClose, data, } = this.props;
        const { TextArea, } = Input;
        const { Option } = Select;

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
          
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        return (
            <Modal
                title="Редактирование"
                visible={visible}
                onCancel={handleClose}
                footer={null}
            >
                <Form 
                    {...layout}
                    name="basic"
                    initialValues={data}
                    onFinish={this.handleSubmit}
                >
                    <Form.Item 
                        label="Фамилия" 
                        name="family" 
                        rules={[{ required: true, message: 'Пожалуйста, введите фамилию'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Имя"
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста, введите имя'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Отчество"
                        name="patronymic"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Пол"
                        name="sex"
                        rules={[{ required: true, message: 'Пожалуйста, выберите пол'}]}
                    >
                        <Select>
                            <Option value={true}>Мужской</Option>
                            <Option value={false}>Женский</Option>
                        </Select>   
                    </Form.Item>
                    <Form.Item
                        label="Группа"
                        name="academicGroupNumber"
                        rules={[{ required: true, message: 'Пожалуйста, введите группу'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Навыки"
                        name="skills"
                    >
                        <TextArea rows={3}/>
                    </Form.Item>
                    <Form.Item
                        label="Тема диплома"
                        name="temA_DIPLOMA"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '5px'}}>Сохранить</Button>
                        <Button htmlType="button" onClick={handleClose}>Отменить</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
