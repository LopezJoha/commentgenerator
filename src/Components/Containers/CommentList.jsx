import React from 'react';
import '../../App.css';
import Comment from '../Basic/Comment'; 

const QUESTIONSARRAY = ["1. Please rate student´s ability to give analytical, step-by-step answers to your questions.", 
                        "2. Please rate student’s ability to give creative, out-of-the-box answers to your questions.",
                        "3. Please rate student’s ability to write error-free code in a short time during the classes or in projects.",
                        "4. Please rate student’s ability to persistently try and solve an activity or a project.",
                        "5. Please rate student’s ability to take feedback constructively, and continuously learn and grow from them.",
                        "6. Please rate student’s ability to learn the concepts patiently and at the right time, rather than rushing through the activities"];

export default function CommentList(props){  
  
  return (
    <ul className='commentList'>
      {props.listComments().map((com, i) => 
          <li className='commentContainer'>
            <h4>{QUESTIONSARRAY[i]}</h4>
            <div className ='commentWrapper'onClick={()=>{navigator.clipboard.writeText(com); props.hasClicked()}}>
              <Comment comment={com}/>
              <img className='copyIcon' src = {require('../../assets/copy.png')} alt='copyIcon'/>
            </div>
          </li>         
        )}
    </ul>             
       
  );
}
