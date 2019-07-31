import React, { useEffect, useRef } from 'react';
// Switch样式的大概逻辑：
//    隐藏input,然后将通过label标签和label里的span来控制样式，并通过伪元素选择器:checked来为选中情况添加样式
//    需要注意：设置display: inline;属性后，最好添加vertical-align:top;，否则会出现一些莫名其妙的bug
import './Switch.scss';
import { creteNewId } from '@/utils/newId';

interface Props {
  checked: boolean;
  onChange: (e: React.ChangeEvent) => void;
  checkedColor?: string;
}

const Switch: React.FunctionComponent<Props> = (props) => {
  const { checked, onChange, checkedColor } = props;
  const idRef = useRef<string>(creteNewId());
  return (
    <div className={'self-ui-switch'}>
      <input
        checked={checked}
        onChange={onChange}
        id={idRef.current}
        className={'self-ui-switch-input'}
        type="checkbox"
      />
      <label
        style={{ backgroundColor: checked ? checkedColor : undefined }}
        className={'self-ui-switch-label'}
        htmlFor={idRef.current}
      >
        <span className={'self-ui-switch-button'}/>
      </label>
    </div>
  );
};
Switch.defaultProps = {
  checkedColor: '#06D6A0'
};

export default Switch;
