import React from 'react';

const styles = {
  background: '#F06664',
  color: '#FFFFFF',
  fontFamily: 'Helvetica',
  outline: "none",
  border: "1px solid",
  borderColor: "#F06664",
  fontSize: "16px",
  textAlign: "center",
  padding: "9px 45px",
  borderRadius: "4px"
};

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={styles}
    >{props.text}</button>
  )
}
