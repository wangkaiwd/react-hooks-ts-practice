import React from 'react';

const ClassVsHooks = () => {
  return (
    <div>
      ClassVsHooks
    </div>
  );
};

export default ClassVsHooks;

interface Props {

}
interface State {
  n: number;
}
// @see:https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#class-components
class ClassComponents extends React.Component<Props, State> {
  state: State = {
    n: 1,
  };

  onClick () {
    // undefined
    console.log(this);
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }
}

export { ClassComponents };
