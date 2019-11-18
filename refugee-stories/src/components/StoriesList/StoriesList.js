import React, { useState, useEffect } from 'react';
import api from '../../utils/api'

const initialStory = {
     title: '',
     contents:''
}


const StoriesList = ({stories,  updateStories, ...props }) => {
     console.log('List props', props)
     const [editing, setEditing] = useState(false)
     const [storyToEdit, setStoryToEdit] = useState(initialStory)

     const fetchStories = () => {    
          api()
          .get('/stories')
          .then(res => {
            console.log('List of stories', res)
            updateStories(res.data)
          })
          .catch(error => {
            console.log(error.message)
          })
     }
     
          useEffect(() => {
               fetchStories()
               // eslint-disable-next-line
          },[])

      

     const editStory = story => {
          setEditing(true)
          setStoryToEdit(story)
     }

     const saveEdit = e => {
          e.preventDefault()
          api()
          .put(`/stories/${storyToEdit.id}`, storyToEdit)
          .then(res => {
               console.log('Put req', res)
               setEditing(false)
               updateStories(stories.map(item => item.id === res.data.id? res.data:item))
          })
          .catch(err => console.log('Put err', err.response))
     }

     const deleteStory = story => {
          api()
          .delete(`stories/${story.id}`)
          .then(res => {
               console.log('Del res', res)
               fetchStories()
               setEditing(false)
               // updateStories(stories.filter(story => story.id !== res.data))
               // props.history.push('/stories')
          })
          .catch(err => console.log(err.response))
     }

    return ( 
     <div>
          <h3>Stories</h3>
          {/* <button onClick={fetchStories}>Fetch Stories</button>              */}
               <div className='list'>
                    {stories.map(i => (
                         <div className='story' key={i.id}>
                              <h2>{i.title}</h2> 
                              <p>{i.contents} </p>
                              <button onClick={() => editStory(i)}>Edit</button>
                              <span>
                              <button onClick={e => {
                                   deleteStory(i)}}>X</button>
                              </span>
                         </div>
                    ))}
                    {editing && (
                         <form onSubmit={saveEdit}>
                          <legend>Edit story</legend>
                         <input name='title'
                               value={storyToEdit.title}
                               onChange={e => setStoryToEdit({...storyToEdit, title: e.target.value})} />
                              <label>
                                   <textarea  value={storyToEdit.contents} onChange={e => setStoryToEdit({
                                        ...storyToEdit, contents: e.target.value
                                   })} />
                              </label> 
                              <button type='submit'>Update Story</button>
                              <button onClick={() => setEditing(false)}>cancel</button>
                         </form>
                    )}
                    
               </div>
     </div>
     );
}
 
export default StoriesList;