import React from 'react'
import PropTypes from 'prop-types';

const Profile = props => {
   
     const handleName = () => {
         alert(props.name);
     };
   return (
       <div>
           <h2 style={{color: "red"}}>{props.name}</h2>
           <p>{props.bio}</p>
           <h2>{props.profession}</h2>
           <img src="pic1.png" alt=""/>
           <button style={{marginTop: "10px"}} onClick={handleName}>Click Me</button>
       </div>
   ) ;
} 

Profile.defaultProps = {
    name: 'Stranger',
    bio: 'unkown',
    profession: 'Studnett'
  };

Profile.prototype = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile;