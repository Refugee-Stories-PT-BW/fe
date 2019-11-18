import React, { useState, useEffect } from 'react';
import api from '../../utils/api'

const StoryForm = (props) => {
    console.log('Form props', props)
    const [story, setStory] = useState({ 
      title: '', contents: ''});

    useEffect(() => {
      const storyToEdit = props.stories.find(
        story => `${story.id}` === props.match.params.id
      );
  
      if (storyToEdit) setStory(storyToEdit);
    }, [props.stories, props.match.params.id]);
  
  
  const handleChange = event => setStory({...story, [event.target.name]: event.target.value});

  const handleSubmit = event => {
    event.preventDefault();
    api().put(`/stories/${story.id}`, story)
          .then(res => {
            props.updateStories(res.data);
            props.history.push("/stories");
          })
          .catch(err => console.log(err.response));
      };
  

  return (
    <form onSubmit={handleSubmit}>
      <input name='title'
             placeholder="Title"
             value={story.title}
             onChange={handleChange} />
      <input name='contents'
             placeholder="Contents"
             value={story.contents}
             onChange={handleChange} />
      <button type='submit'>Update Story</button>
    </form>
  );
};

export default StoryForm;