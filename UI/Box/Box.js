import * as React from 'react';
const Box = (props) => {
  return (
      <div className={props.className} onClick={props.onClick}>
          {props.children}
      </div>
  )
}
export default Box