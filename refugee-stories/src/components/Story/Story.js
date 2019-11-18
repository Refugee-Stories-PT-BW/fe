import React from 'react';
import api from '../../utils/api'
import StoryForm from '../StoryForm/StoryForm'
import { Route } from 'react-router-dom';

const Story = (props) => {
    console.log('Story props',props)

    const story = props.stories.find(
        thing => `${thing.id}` === props.match.params.id
    )
        console.log('Story', story)

        if (!props.stories.length || !story) {
            return <h2>Loading story data...</h2>;
          }
    const handleDelete= e => {
        e.preventDefault()
             api()
             .delete(`/stories/${story.id}`)
                 .then (res => {
                    console.log(res.data)
                    props.updateStories(res.data)
                    props.history.push('/stories')
                 } )
                 .catch(err => console.log('Error: ', err))        
           }

    return ( 
        <div className='story'>
             <h2>Title:{story.title}</h2>
            <h2>Contents: {story.contents}</h2>
            <button  onClick={ handleDelete}>X</button>
            {/* <button  onClick={() => props.history.push(`/stories/${story.id}`)}>Edit</button> */}
            {/* <NavLink exact to ={`/friendslist/${props.id}`}> Friend</NavLink> */}
            <Route exact path='/stories/:id' render={props => (
        <StoryForm {...props} />
      )} />
            {/* <Link to={`/friendslist/edit/${props.id}`}>Edit</Link> */}
           
        </div>
     );
}
 
export default Story;