import React from 'react';
import {Link} from 'react-router-dom'
import { withFormik, Field } from 'formik'
import * as Yup from 'yup'
import api from '../../utils/api'
import { Grid, Header, Segment, Form, Button} from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = ({ handleSubmit, errors, touched }) => {

    return ( 
        <Wrapper>
            <Grid
            textAlign="center"
            verticalAlign="middle"
            style={{ marginTop: "5%", display: "flex", flexDirection: "column" }}
            >
                <Header as="h2" color="blue" textAlign="center">
                    <img src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png" alt="logo"/>
                    {" "}Login To Your Account
                </Header>

                <div style={{ display: "flex", justifyContent: "center" }}></div>

                <Form size='large' onSubmit={handleSubmit} className='story-form'>
                    <Segment
                    stacked
                    style={{ width: "313px", display: "flex", flexDirection: "column", }}
                    >
                        <Field 
                        fluid 
                        name='username' 
                        type='text' 
                        placeholder='Username'
                        style={{marginBottom: '10px', padding: '9.5px 14px' }}
                        // autoComplete='off' 
                        /> <p>{touched.username && errors.username}</p>

                        <Field 
                        fluid
                        name='password' 
                        type='password' 
                        placeholder='Password'
                        style={{marginBottom: '10px' }}
                        // autoComplete='off'
                        /> <p>{touched.password && errors.password}</p>

                        <Button type='submit' color='blue' size='large'>
                            Come on in &rarr; 
                        </Button>

                        <Link to="/register" style={{}}>Don't have an account?</Link>

                    </Segment>
                </Form>
            </Grid>
        </Wrapper>
     );
}
 
export default withFormik ({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(4).required()
    }),
    handleSubmit: (values, formikBag) => {
        api()
        .post('/users/login', values)
        .then(res => {
            console.log('Res', res)
            localStorage.setItem('token', res.data.token)
            formikBag.props.history.push('/stories')
        })
        .catch(e => console.log(e.response.data.message))
    }
}) (LoginForm);