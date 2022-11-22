import * as React from 'react';
const Input = (props) => {
  return (
      <input className={props.className} onChange={props.onChange} type={props.type} value={props.value} placeholder={props.placeholder}>
          {props.children}
      </input>
  )
}
export default Input