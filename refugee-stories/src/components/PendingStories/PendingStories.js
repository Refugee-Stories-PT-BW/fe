import React, { useState, useEffect } from 'react';
import { fetchStoriesPendingData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

import api from '../../utils/api'



const PendingStories = () => {
    //  console.log('PendingList props', props)
    const state = useSelector(state => state)
     const dispatch = useDispatch()
     const [approving, setApproving] = useState(false)
     const [storyToApprove, setStoryToApprove] = useState({
        title: '',
        contents:'',
        pending: 1})

    //  const fetchStoriesPending = () => {    
    //       api()
    //       .get('/stories/a/pending')
    //       .then(res => {
    //         console.log('List of pending stories', res)
    //        updateStories(res.data.filter(item => item.pending === 1))
    //       })
    //       .catch(error => {
    //         console.log(error.message)
    //       })
    //  }
     
          useEffect(() => {
               dispatch(fetchStoriesPendingData())
               // eslint-disable-next-line
          },[])

      

      const approveStory = story => {
          setApproving(true)
          setStoryToApprove(story)
     }

     const saveApprove = e => {
          e.preventDefault()
          api()
          .put(`/stories/${storyToApprove.id}`, storyToApprove)
          .then(res => {
               console.log('Put Approve req', res)
               setApproving(false)
               dispatch(fetchStoriesPendingData((state.stories.map(item => item.id === res.data.id? res.data:item))))
               fetchStoriesPendingData()
          })
          .catch(err => console.log('Put Approve err', err.response))
     }

     const deleteStory = story => {
          api()
          .delete(`stories/${story.id}`)
          .then(res => {
               console.log('Del res', res)
               fetchStoriesPendingData()
               setApproving(false)
               // updateStories(stories.filter(story => story.id !== res.data))
              dispatch(fetchStoriesPendingData())
          })
          .catch(err => console.log(err.response))
     }
     

    return ( 
     <div>
          <h2>Pending Stories</h2>
               <div className='list'>
                    {state.stories.map(i => (
                         <div className='story' key={i.id}>
                              <h2>{i.title}</h2> 
                              <h4>Username:{i.name}</h4>
                              <h4>Email:{i.email}</h4>
                              <p>{i.contents} </p>
                              {/* <button onClick={() => editStory(i)}>Edit</button> */}
                              <span>
                              <button onClick={() => {approveStory(i)}}>Approve</button>
                              </span>
                              <span>
                              <button onClick={e => {
                                   deleteStory(i)}}>X</button>
                              </span>
                         </div>
                    ))}
                    {approving && (
                         <form onSubmit={saveApprove}>
                          {/* <legend>Edit story</legend> */}
                         <input name='pending'
                               value={storyToApprove.pending}
                               onChange={e => setStoryToApprove({...storyToApprove, pending: e.target.value})} /> 
                              <button type='submit'>Approve Story</button>
                              <button onClick={() => setApproving(false)}>cancel</button>
                         </form>
                    )}
               </div>
     </div>
     );
}
 
export default PendingStories;