import React from 'react';

// function
const withAddClick = Component => {

  // component
  return class Welcome extends React.Component {
    compontDidMount () {
      console.log('did mount');
    }

    render() {
      const addClick = () => {
        console.log('hello');
      }

      return (
        <div style={{ background: 'blue' }}>
          <Component {...this.props} handleClick={addClick} />
        </div>
      );
    }
  }
};

export default withAddClick;
