import React from 'react';
// Switch样式的大概逻辑：
//    隐藏input,然后将通过label标签和label里的span来控制样式，并通过伪元素选择器:checked来为选中情况添加样式
//    需要注意：设置display: inline;属性后，最好添加vertical-align:top;，否则会出现一些莫名其妙的bug
import './Switch.scss';

interface Props {
  checked: boolean,
  onChange: (e: React.ChangeEvent) => void
}

const Switch: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={'self-ui-switch'}>
      <input
        checked={props.checked}
        onChange={props.onChange}
        id={'switch-input'}
        className={'self-ui-switch-input'}
        type="checkbox"
      />
      <label
        className={'self-ui-switch-label'}
        htmlFor="switch-input"
      >
        <span className={'self-ui-switch-button'}/>
      </label>
    </div>
  );
};

export default Switch;
