import * as React from 'react';
const Textitem = (props) => {
  return (
      <p className={props.className}> 
      {props.children}
      </p>
  )
}
export default Textitem