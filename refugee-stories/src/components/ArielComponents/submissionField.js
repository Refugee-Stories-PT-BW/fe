import React, { useState, useEffect } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import {Route} from 'react-router-dom'
import styled from "styled-components";
import Axios from "axios";
import StoryFrom from '../StoryForm/StoryForm'
import api from '../../utils/api'
import StoryForm from '../StoryForm/StoryForm'
import { getStoriesData } from '../../actions'


const Wrapper = styled.section`
  width: 80%;
  /* height: 300px; */
  margin-top: 2%;
  margin-left: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmissionField = (props) => {
  const [userStory, setUserStory] = useState([]);

  // const story = userStory.find(
  //   story => `${story.id}` === userStory.param.id
  // )

  useEffect(() => {
    Axios.get("https://refu-stories-api.herokuapp.com/stories ")
      .then(res => setUserStory(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteStory = story => {
         api()
         .delete(`/stories/${story.id}`)
             .then (res => {
                console.log(res.data)
                setUserStory(userStory.filter(i => {
                  return i.id != story.id;
                }))
             } )
             .catch(err => console.log('Error: ', err))        
       }

  // const approved = userStory.filter(pending => {
  //   return pending.pending === 0;
  // });
  // console.log(approved);

  return (
    <div>
      {userStory.filter(pending => {
        return pending.pending === 0;
      }).map(item => {
        return (
          <Wrapper key={item.id}>
            <Container text>
              <Header>{item.title}</Header>
              <p>{item.contents}</p>
              <Button color="blue" onClick={() => props.history.push(`/stories/${item.id}`)}>Edit</Button>
              <Button color="red" onClick={e => {deleteStory(item)}}>Delete</Button>
              <Route exact path='/stories/:id' render={props => (
                <StoryForm {...props} />
              )} />
            </Container>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default SubmissionField;