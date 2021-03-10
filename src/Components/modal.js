import React from 'react';
import githubicon from '../Images/github.png'
import linkedinicon from '../Images/linkedin.png'
import codecheficon from '../Images/codechef.png'
import hackerrankicon from '../Images/hackerrank.png'
import twittericon from '../Images/twitter.png'
import mediumicon from '../Images/medium.png'
import emailicon from '../Images/email.svg'

import './modal.css';
const Modal = () => {
    return (
      <div className='modal-container'>

        <h3>Add developer profile</h3>
        <hr></hr>

        <div class='input-component-all'>

        <div className='box-text'>
        <img src={githubicon} alt="github logo"/>
        <h4>Github*</h4> 
        </div>
        <input type ='text' className = 'id_input'/>



        <div className='box-text-2'>
        <img src={linkedinicon} alt="github logo"/>
        <h4>Linkedin</h4> 
        </div>
        <input type ='text' className = 'id_input'/>


        <div className='box-text-2'>
        <img src={codecheficon} alt="github logo"/>
        <h4>Codechef</h4> 
        </div>
        <input type ='text' className = 'id_input'/>


        <div className='box-text-2'>
        <img src={hackerrankicon} alt="github logo"/>
        <h4>Hackerrank</h4> 
        </div>
        <input type ='text' className = 'id_input'/>



        <div className='box-text-2'>
        <img src={twittericon} alt="github logo"/>
        <h4>Twitter</h4> 
        </div>
        <input type ='text' className = 'id_input'/>


        <div className='box-text-2'>
        <img src={mediumicon} alt="github logo"/>
        <h4> Medium</h4> 
        </div>
        <input type ='text' className = 'id_input'/>

        <div className='box-text-2'>
        <img src={emailicon} alt="github logo"/>
        <h4>Email</h4> 
        </div>
        <input type ='text' className = 'id_input'/>
        </div>

        <hr className="bottom"></hr>

        <div className="button-row">
        <button className='cancel-button' type="button">Cancel</button>
        <button className='submit-button' type="button">Submit</button>
        </div>
        
        </div>

    );
}
export default Modal;