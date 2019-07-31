## 问题记录

### 一个奇怪的问题
为`tsconfig.json`配置`baseUrl`和`paths`属性，在执行`yarn start`命令之后会自动删除`paths`的相关配置。

当通过`extends`属性继承一个新的配置文件的时候，这个问题解决了。
