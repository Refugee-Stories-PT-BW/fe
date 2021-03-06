import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPendingStoriesData } from '../actions'
import { Container, Header, Button, Item } from "semantic-ui-react";
import styled from "styled-components";
import api from '../utils/api'

const Wrapper = styled.section`
  width: 80%;
  /* height: 300px; */
  margin-top: 2%;
  margin-left: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pending = props => {
    
    const [storyApprove, setStoryApprove] = useState({
        pending: 0
    })

    useEffect(() => {
        props.getPendingStoriesData()
    }, [])

    const deleteStory = story => {
        api().delete(`stories/${story.id}`)
            .then(res => {
                console.log('Deleted Story', res)
                props.getPendingStoriesData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const approveStory = story => {
        setStoryApprove({...story, pending: 0})

        api().put(`stories/${story.id}`, storyApprove)
        .then(res => {
            console.log('Story Approved', res)
            props.getPendingStoriesData()
        })
        .catch(err => console.log('Failed Approval', err))
    }

    return (
        <div>
            {props.pendingStories.map(i => {
                return(
                    <Wrapper key={i.id}>

                        <Container text>
                            <Header>{i.title}</Header>
                            <h2>{i.name}</h2>
                            <p>{i.contents}</p>
                            <Button color='blue' onClick={() => {approveStory(i)}}>Approve</Button>
                            <Button color="red" onClick={e => {deleteStory(i)}}>Delete</Button>
                        </Container>

                    </Wrapper>
                )
                    //      <div className='story' key={i.id}>
                    //           <h2>{i.title}</h2> 
                    //           <h4>Username:{i.name}</h4>
                    //           <h4>Email:{i.email}</h4>
                    //           <p>{i.contents} </p>
                    //           {/* <button onClick={() => editStory(i)}>Edit</button> */}
                    //           <span>
                    //           <button onClick={() => {approveStory(i)}}>Approve</button>
                    //           </span>
                    //           <span>
                    //           <button onClick={e => {
                    //                deleteStory(i)}}>X</button>
                    //           </span>
                    //      </div>
                    // ))}
                })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        pendingStories: state.pendingStories,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getPendingStoriesData }
)(Pending);