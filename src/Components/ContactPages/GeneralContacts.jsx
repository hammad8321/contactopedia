import React from 'react'
import Contact from './Contact'

const GeneralContacts = (props) => {
  return (
    <div>
        {/* <button className='btn btn-secondary form-control'>General contact</button> */}
        {
          props.contacts.map((contact,index)=>(<Contact contact={contact} key={index}></Contact>))}
        
    </div>
  )
}

export default GeneralContacts