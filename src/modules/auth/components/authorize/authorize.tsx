import React, {useContext, useState} from 'react';
import {Formik, Form} from "formik";
import index from "../../index";
import Api from "../../../../helpers/api";
import {Redirect} from 'react-router-dom';
import {Button, Input} from "antd";
import {AppContext} from "../../../../App";

type Props = {};
type Credentials = {
    login: string,
    password: string;
};

const authorize = (credentials: Credentials) => {
    return Api.get('/auth/login', {
        params: credentials
    })
}

const Authorize: React.FC<Props> = (props: Readonly<Props>) => {
    let context = useContext(AppContext);
    const [isAuthorized, authMe] = useState(false);

    console.log('Auth module', isAuthorized);

    return (
        <>
            {isAuthorized && <Redirect to="/"/>}
            <div className="authorize">
                <Formik
                    initialValues={{
                        login: 'pazzitiv',
                        password: '123qwe'
                    }}
                    onSubmit={(values, helpers) => {
                        authorize(values)
                            .then(response => {
                                context.authenticate = {...response.data};
                                authMe(true);
                            })
                            .catch(exception => {
                                console.error(exception);
                            })
                    }}
                >
                    {(props) => {
                        const {values, handleChange, handleSubmit} = props;
                        return <Form onSubmit={handleSubmit}>
                            <Input key={'login-' + index} name='login' type='text' value={values.login}
                                   onChange={handleChange} addonBefore="Имя пользователя" inputMode="text"/>

                            <Input key={'password-' + index} value={values.password} onChange={handleChange}
                                   name='password'
                                   type='password' addonBefore="Пароль" inputMode="text"/>

                            <Button type='primary' htmlType='submit'>Войти</Button>
                        </Form>
                    }}
                </Formik>
            </div>
        </>
    );
}

export default Authorize
