import React from 'react';
// import Friend from '../Friend/Friend'
// import FriendForm from '../FriendForm/FriendForm'
// import { Route, Redirect } from 'react-router-dom'; 
// import api from '../../utils/api'

const StoriesList = (props) => {
     console.log('List props', props)
     
     function routeToStory(e, user) {
          e.preventDefault();
          props.history.push(`users/${user.id}`)
     }
     
   

     // useEffect(() => {
     //      api()
     //      .get('/friends?_limit=5')
     //      .then(res => {
     //           console.log('Getting the List',res)
     //           setFriends(res.data)
     //      })
     //      .catch(error => {
     //           console.log(error)
     //      })
     // }, [])
     
     // const handleDelete= id => {
     //      api()
     //      .delete(`/friends/${id}`)
     //          .then (res => {
     //             console.log(res.data)
     //             setFriends(res.data)
     //          } )
     //          .catch(err => console.log('Error: ', err))        
     //    }
     
     //    const editFriend = friend => {
     //      api().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
     //        .then(res => {
     //          setFriends(res.data);
     //          props.history.push("/friends");
     //        })
     //        .catch(err => console.log(err.response));
     //    };
      
        
    return ( 
     <div>
          <h3>Users</h3>
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
                         <div className='friend'
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