import React from 'react';

import withAddClick from '../hoc/withAddClick'

const AddTodoButton = ({
  handleOnClick
}) => (
  <button onClick={handleOnClick}>Add todo</button>
);

export default withAddClick(AddTodoButton);
