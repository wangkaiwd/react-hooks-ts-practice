## 开发一个`React`开关切换组件
![](https://upmostly.com/wp-content/uploads/react-switch-toggle-component.jpg)
学习如何使用原生`HTML`的复选框来开发一个`React`开关组件，在这个过程你将会学到许多`React`复选框相关的知识。

下面是`IOS`向世界推出的`UI`组件，人们把它称之为`Switch`或者`Toggle`。 
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-01.gif)


### 我们在开发什么

在`IOS`推出`Switch`之前，网页中的布尔输入只有复选框。复选框当然依旧可以在今天继续使用，但是`switch`根据现实生活中真实的开关改进了复选框。

`switch`给人真实的感觉。相比于点击复选框，`switch`的点击效果就像你在真实的使用一个开关一样。

因此，在这篇教程中，我们将会基于原生的`HTML`复选输入框来开发一个新的`React` `Switch`组件。此外，我们也会添加一些`CSS`样式，来让简单、古老的复选框变成一个时髦漂亮的`Switch`。

### 使用`HTML`开发`Switch`元素
每当我创建一个新的`React`组件的时候,我会先建立一个初步令人满意的`HTML`和`CSS`结构，然后再去编写`JavaScript`代码。

创建一个`Switch.js`的新文件，为它添加如下代码：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code1.png)

你这时候如果在编辑器中完成了这段代码，由于我们使用了原生复选框来作为`React Switch`组件的基础，你将会看到一个简单的复选框。
> 提示：  
> 这里我们没有必要再重新发明一个轮子。毕竟，开关是展示布尔值的另一种方式，而复选框原本就是用来处理布尔值的输入框。

### 用`CSS`来美化组件
在组件文件的同一目录下建立`Switch.css`文件,加入下面的`CSS`代码，大概看一下每个类的用途。我不打算在这篇教程中去探索`CSS`,文章的重点是`JavaScript`和`React`。
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code2.png)

### 使用`Switch`组件
要在`React`中使用`Switch`组件，我们还需要最后一步：在其它组件中`import` `Switch`组件并且在组件中声明：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code3.png)

保存文件后，可以看到在浏览器中我们已经将一个简单的复选框转换成了一个看上去相当漂亮的`Switch`输入框：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-02.gif)
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
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code4.png)

代码相比于之前有2个新增内容：  
* `checked`: 通过父组件传入的`checked`来控制是否选中
* `onChange`: 通过父组件传入的`onChange`来更改组件的`checked`属性

最后，打开父组件(我使用的是`App.tsx`)并且修改组件的使用方式：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code5.png)

注意，现在父组件的状态来自于`useState hooks`。这意味着这个组件将要向下传递状态到我们的`Switch`组件的`checked`属性。

我们也在`onChange`函数中向下传递了设置函数`setChecked`。这样，在`Switch`组件进行切换改变`value`值的时候，他将会调用父组件传下来的`onChange`函数

### 切换时改变背景色
如果你完成了上边的代码，会发现`Switch`组件在切换状态的时候视觉`UI`上并没有什么不同。

由于我们能够使用`Switch`组件中通过父组件`props`传递下来的`checked`属性，所以我们只需要对代码做一个很简单的改动就可以改变`Switch`组件的背景色。

修改`Switch.tsx`组件中的`label`元素，代码如下：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code6.png)

保存组件，切换到你的浏览器页面你会看到一个完整工作的`Switch`组件。当`Switch`组件激活的时候会变成绿色，而当它关闭的时候会变为灰色。

到这里，我们已经拥有了一个完整功能的`React` `Switch`组件，它可以切换、更改`value`值并且会在激活的时候变为绿色。  

如果你想要知道如何能够通过指定的激活颜色来扩展我们的`Switch`组件，那么请继续往下阅读。
### 指定切换颜色
开发一个灵活的`React`组件并且能够让它应用于多种不同的场景是一个特别好的编程实践。例如，我们可能将会在下面的情况使用`Switch`组件：  
* 在登录表单中，告诉网站要记住你的用户认证信息
* 在一个设置页面
* 在模态框中用来删除用户账户

这些只是3个简单的例子，网页中还有数不尽的`Switch`组件的应用场景。

现在有一个问题，我们的`Switch`组件在激活的时候只能显示绿色。假设我们在模态框中删除用户账户时想要让激活颜色变成红色来更好的提醒用用户该怎么办呢？

让我们为`Switch`组件添加另外一个属性`checkedColor`来进行控制激活额颜色：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code7.png)

`checkedColor`是一个16进制的字符串。保存代码后，跳转到父组件并为声明的`Switch`组件添加一个新的`checkedColor`属性：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/react-switch-code8.png)

现在我们已经得到了一个灵活的、模块化的`Switch`组件。

### 结语
这是一篇根据原文使用`TypeScript`改写的一篇译文，原文地址在这里：
* Build a React Switch Toggle Component(https://upmostly.com/tutorials/build-a-react-switch-toggle-component)

本文源代码都在我的`github`仓库：
* [源代码](https://github.com/wangkaiwd/react-hooks-TS-practice)
