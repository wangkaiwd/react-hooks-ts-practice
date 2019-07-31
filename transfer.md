## 开发一个`React`开关切换组件
学习如何使用原生`HTML`的复选框来开发一个`React`开关组件，在这个过程你将会学到许多`React`复选框相关的知识。

下面是`IOS`向世界推出的`UI`组件，人们把它称之为`Switch`或者`Toggle`：  

### 我们在开发什么

在`IOS`推出`Switch`之前，网页中的布尔输入只有复选框。复选框当然依旧可以在今天继续使用，但是`switch`根据现实生活中真实的开关改进了复选框。

`switch`给人真实的感觉。相比于点击复选框，`switch`的点击效果就像你在真实的使用一个开关一样。

因此，在这篇教程中，我们将会基于原生的`HTML`复选输入框来开发一个新的`React` `Switch`组件。此外，我们也会添加一些`CSS`样式，来让简单、古老的复选框变成一个时髦漂亮的`Switch`。

### 使用`HTML`开发`Switch`元素
每当我创建一个新的`React`组件的时候,我会先建立一个初步令人满意的`HTML`和`CSS`结构，然后再去编写`JavaScript`代码。

创建一个`Switch.js`的新文件，为它添加如下代码：  
```jsx harmony
import React from 'react';
import './Switch.css';

const Switch = () => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
```

你这时候如果在编辑器中完成了这段代码，由于我们使用了原生复选框来作为`React Switch`组件的基础，你将会看到一个简单的复选框。
> 提示：  
> 这里我们没有必要再重新发明一个轮子。毕竟，开关是展示布尔值的另一种方式，而复选框原本就是用来处理布尔值的输入框。

### 用`CSS`来美化组件
在组件文件的同一目录下建立`Switch.css`文件,加入下面的`CSS`代码，大概看一下每个类的用途。我不打算在这篇教程中去探索`CSS`,文章的重点是`JavaScript`和`React`。
```scss
.self-ui-switch {
  display: inline-flex;
  vertical-align: top;
  &-input {
    height: 0;
    width: 0;
    display: none;
  }
  &-label {
    position: relative;
    width: 100px;
    height: 50px;
    background-color: gray;
    border-radius: 100px;
    cursor: pointer;
  }
  &-button {
    position: absolute;
    height: 46px;
    width: 46px;
    top: 50%;
    left: 2px;
    // 这里不能使用border-radius: 50%;会导致在button变宽的时候样式变丑
    border-radius: 46px;
    transform: translateY(-50%);
    background-color: #fff;
    transition: all 0.2s;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  &-input:checked + &-label &-button {
    // 只有设置相同属性才会覆盖，这里并不能使用right: 2px,只能使用left: calc(100% - 2px);
    left: calc(100% - 2px);
    transform: translateX(-100%) translateY(-50%);
  }
  &-label:active &-button {
    width: 60px;
  }
}
```

### 使用`Switch`组件
要在`React`中使用`Switch`组件，我们还需要最后一步：在其它组件中`import` `Switch`组件并且在组件中声明：  
```jsx harmony
import React from 'react';
import Switch from "./Switch";

function App() {
  return (
    <div className="app">
      <Switch />
    </div>
  );
}

export default App;
```
保存文件后，可以看到在浏览器中我们已经将一个简单的复选框转换成了一个看上去相当漂亮的`Switch`输入框：  

### 通过`props`来接收事件和属性
尽管我们的`Switch`组件可能看起来很实用，但其实它并没有正真的改变它的值。

这是因为我们的组件缺少了俩个重要的属性：  
* `checked`
* `onChange`

`checked`属性存储了`input`的当前`value`值。在我们的组件中，他可能是`true`或`false`。

每当我们切换`Switch`组件时都会触发`onChange`事件，我们将会通过`onChange`来改变`Switch`组件的`value`值。

在编写代码之前，我们需要了解一下无状态组件和有状态组件。一个无状态组件也叫做哑巴组件不能控制它自己的状态，因此，需要另外一个组件来记录`Switch`组件的状态。

我们的`Switch`组件将会是一个无状态组件，它需要父组件通过`props`来为它传递属性。

打开`Switch.js`并且进行如下修改：  
```typescript jsx
import React from 'react';
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
```
代码相比于之前有2个新增内容：  
* `checked`: 通过父组件传入的`checked`来控制是否选中
* `onChange`: 通过父组件传入的`onChange`来更改组件的`checked`属性

最后，打开父组件(我使用的是`App.tsx`)并且修改组件的使用方式：  
```typescript jsx
import React, { useState } from 'react';
import Switch from '@/components/switch/Switch';
const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={'app'}>
      <Switch checked={checked} onChange={() => setChecked(!checked)}/>
    </div>
  );
};
export default App;
```
注意，现在父组件的状态来自于`useState hooks`。这意味着这个组件将要向下传递状态到我们的`Switch`组件的`checked`属性。

我们也在`onChange`函数中向下传递了设置函数`setChecked`。这样，在`Switch`组件进行切换改变`value`值的时候，他将会调用父组件传下来的`onChange`函数

### 切换时改变背景色
如果你完成了上边的代码，会发现`Switch`组件在切换状态的时候视觉`UI`上并没有什么不同。

### 指定切换颜色
