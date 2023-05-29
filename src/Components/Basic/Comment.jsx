import React from 'react';
import '../../App.css';

export default function Comment(props) {
  
  return (
    <p className='comment'>
        {props.comment}
    </p>
  )
}
