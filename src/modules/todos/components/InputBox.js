import React from 'react';

const InputBox = ({
  value,
  onChange
}) => {
  const handleOnChange = event => {
    onChange(event.target.value)
  }

  return (
    <input
      style={{ border: '1px solid black' }}
      value={value}
      onChange={handleOnChange}
    />
  )
}

export default InputBox;
