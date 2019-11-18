import React from 'react';
// import api from '../../utils/api'


const StoriesList = (props) => {
     console.log('List props', props)
     
     function routeToStory(e, story) {
          e.preventDefault();
          props.history.push(`stories/${story.id}`)
     }
     
     // const handleDelete= (e, story) => {
     //      e.preventDefault()
     //           api()
     //           .delete(`/stories/${story.id}`)
     //               .then (res => {
     //                  console.log(res.data)
     //                  props.updateStories(res.data)
     //                  props.history.push('/stories')
     //               } )
     //               .catch(err => console.log('Error: ', err))        
     //         }
  

  
        
    return ( 
     <div>
          <h3>Stories</h3>
          <button onClick={props.fetchStories}>Fetch Stories</button>
          <button onClick={() => {
                    localStorage.removeItem('token');
                    // eslint-disable-next-line no-restricted-globals
                    props.history.push('/login')}}>Logout</button>

                    
               <div className='list'>
               {/* <Route path="/friendslist/edit/:id" render={props => (
                         
                         <FriendForm {...props} friends= {friends} updateFriends={setFriends} />
                    )}/> */}
                    {props.stories.map(i => (
                         <div className='story'
                         onClick={e => routeToStory(e, i)} key={i.id} >
                         <p>{i.title}</p> 
                         <p>{i.contents} </p>
                         {/* <p>{i.email}</p> */}
                         
                         </div>
                    ))}
                    
               </div>
     </div>
     );
}
 
export default StoriesList;