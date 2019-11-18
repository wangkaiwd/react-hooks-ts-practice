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
  // 这样写并没有将对应的方法写到原型上，而是作为class构建出来的实例的属性存在
  // 原型上的方法是共有的，并不会在每次使用new创建实例的时候都进行绑定。而自身属性在每次创建实例的时候都需要添加，会浪费内存
  // 有关属性方法，静态方法，原型方法的讨论：https://stackoverflow.com/a/1635143/11720536
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
