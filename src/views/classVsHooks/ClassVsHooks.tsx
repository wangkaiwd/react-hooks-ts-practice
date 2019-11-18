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

  // constructor (props: Props) {
  //   super(props);
  //
  //   this.onClick2 = () => {
  //     console.log(this);
  //   };
  // }

  // javascript 新的class属性写法，当属性为函数时可以这样写
  // @see: https://github.com/tc39/proposal-class-fields
  onClick = () => {
    console.log(this.state.n);
  };
  // onClick = function (this: undefined) {
  //   console.log('this', this);
  // };

  // onClick () {
  //   // undefined
  //   console.log(this);
  // }

  // onClick2 = () => {
  //   console.log(this);
  // };

  render () {
    return (
      <div>
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }
}

export { ClassComponents };
