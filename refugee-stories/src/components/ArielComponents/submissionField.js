import React, { useState, useEffect } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import styled from "styled-components";
import Axios from "axios";

const Wrapper = styled.section`
  width: 80%;
  /* height: 300px; */
  margin-top: 2%;
  margin-left: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SubmissionField() {
  const [userStory, setUserStory] = useState([]);

  useEffect(() => {
    Axios.get("https://refu-stories-api.herokuapp.com/stories ")
      .then(res => setUserStory(res.data))
      .catch(err => console.log(err));
  }, []);

  const approved = userStory.filter(pending => {
    return pending.pending === 0;
  });
  console.log(approved);

  return (
    <div>
      {approved.map(item => {
        return (
          <Wrapper key={item.id}>
            <Container text>
              <Header>{item.title}</Header>
              <p>{item.contents}</p>
              <Button 
              color="blue"
              
              >
                Edit
              </Button>
              <Button color="red">Delete</Button>
            </Container>
          </Wrapper>
        );
      })}
    </div>
  );
}