import React, { useState, useEffect } from 'react';
import api from '../../utils/api'
// import { Link } from 'react-router-dom'
import {Field,  withFormik} from 'formik';
import * as yup from 'yup';
import { Grid, Header, Segment, Form, Button} from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitStory = ({handleSubmit, errors, touched, values, status, handleReset, ...props }) => {

    const [storiesPending, setStoriesPending] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    // console.log('Formik props', props);

     

    useEffect(() => {
        if(status) {
            setStoriesPending([...storiesPending, status]);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);


    return (  

        <Wrapper>
            <Grid
            textAlign="center"
            verticalAlign="middle"
            style={{ marginTop: "5%", display: "flex", flexDirection: "column" }}
            >
                <Header as="h2" color="blue" textAlign="center">
                    <img src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png" alt="logo"/>
                    {" "}Submit A Story
                </Header>

                <div style={{ display: "flex", justifyContent: "center" }}></div>

                <Form size='large' className='story-form' onSubmit={handleSubmit}>
                    <Segment>
                        <Field
                        name='name' 
                        type='text' 
                        placeholder='Your Name' 
                        style={{marginBottom: '10px'}}/>
                        {touched.name && errors.name && (
                            <p className='error'>{errors.name}</p>
                        )}

                        <Field
                        name='email' 
                        type='email' 
                        placeholder='Your email' 
                        style={{marginBottom: '10px'}}/>
                        {touched.email && errors.email && (
                            <p className='error'>{errors.email}</p>
                        )}

                        <Field
                        name='title' 
                        type='text' 
                        placeholder='Title of Your Story' 
                        style={{marginBottom: '10px'}}/>
                        {touched.title && errors.title && (
                            <p className='error'>{errors.title}</p>
                        )}

                        <Field
                        component='textarea' 
                        name='contents' 
                        type='text' 
                        placeholder='Enter your story...' 
                        style={{marginBottom: '10px'}}/>
                        {touched.story && errors.story && (
                            <p className='error'>{errors.story}</p>
                        )}
                
                        
                        <div className ='button-div' style={{marginTop: '40px'}}>
                        {/* <h2 style={{display: 'none'}}>Thank you for submitting the form!</h2> */}
                            <Button color='blue' className='button' type='submit'>Submit the Story
                                {/* {isLoading && <h3>Submitting the story...</h3>}
                                {!isLoading && <h3>Submit Your Story</h3>} */}
                            </Button>
                        </div>
                    </Segment>  
                </Form>

            </Grid>
        </Wrapper>

    //     <div className='story-form'>
    //      {/* <Link to='/'>Home</Link> */}
    //         <h2>Tell Us Your Story!</h2>
    //      <div className='thanks-div'></div>

    //     <Form>
    //        <Field name='name' type='text' placeholder='Your name' />

    //        {touched.name && errors.name && (
    //            <p className='error'>{errors.name}</p>
    //        )}

    //        <Field name='email' type='email' placeholder='Your email' />

    //         {touched.email && errors.email && (
    //             <p className='error'>{errors.email}</p>
    //         )}

    //         <Field name='title' type='text' placeholder='Title of Your Story' />

    //        {touched.title && errors.title && (
    //            <p className='error'>{errors.title}</p>
    //        )}

    //         <Field component='textarea' name='contents' type='text' placeholder='Enter your story...' />

    //        {touched.story && errors.story && (
    //            <p className='error'>{errors.story}</p>
    //        )}
 
           
    //        <div className ='button-div' style={{marginTop: '40px'}}>
    //        {/* <h2 style={{display: 'none'}}>Thank you for submitting the form!</h2> */}
    //         <button className='button' type='submit'>Submit the Story
    //             {/* {isLoading && <h3>Submitting the story...</h3>}
    //             {!isLoading && <h3>Submit Your Story</h3>} */}
    //         </button>
    //        </div>
    //     </Form>
        
    //    </div>
        
    );
}

export default withFormik({

    mapPropsToValues: ( values ) => {
        // console.log('Values', values)
        return {
            name: values.name || '',
            email: values.email || '',
            title: values.title || '',
            contents: values.contents || '',
            pending: 1
            // comment: values.comment|| '',
        }
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('Fill out this field!'),
        contents: yup.string().required('Fill out this field!'),
        name: yup.string().required('Fill out this field!'),
        email: yup.string().email('Email not valid!').required()
    }),


    handleSubmit(values, { setStatus, props }) {
       api()
        .post('/stories', values)
        .then(res => {
            console.log('Add Story', res)
            setStatus(res.data);
            props.history.push('/pending')
        })
        .catch(err => console.log(err.response));
    }

}) (SubmitStory)


