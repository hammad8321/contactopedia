import React from 'react'

const Contact = (props) => {
  return (
    <div>
        <div>
        <button className='btn btn-secondary form-control'> {props.contact.name}</button>
    </div>
    </div>
  )
}

export default Contact