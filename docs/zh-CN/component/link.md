# Link 链接

### 类型，颜色
> 通过type属性控制组件的主题类型，颜色

``` html
  <p-link type="yellow" href="http://www.baidu.com"  >百度</p-link>
  <p-link type="green" href="button.html" >button按钮</p-link>
  <p-link type="red" >红色</p-link>
  <p-link type="blue" >蓝色</p-link>
  <p-link type="gray" >灰色</p-link>
  <p-link type="pepper" >紫色</p-link>
```
<p-link type="yellow" href="http://www.baidu.com" >百度</p-link>
<p-link type="green" href="button.html" >button按钮</p-link>
<p-link type="red" >红色</p-link>
<p-link type="blue" >蓝色</p-link>
<p-link type="gray" >灰色</p-link>
<p-link type="pepper" >紫色</p-link>

### 链接
> 通过href指定跳转的链接，无则不跳转

``` html
  <p-link type="blue" href="link.html">link</p-link>
```
<p-link type="blue" href="link.html">link</p-link>

### 模式
> 通过target属性控制打开页面的方式

``` html
  <p-link type="yellow" href="link.html" >新页面</p-link>
  <p-link type="green" href="link.html" target="self" >本页面</p-link>
```
<p-link type="yellow" href="link.html" >新页面</p-link>
<p-link type="green" href="link.html" target="self" >本页面</p-link>

### 禁用
> 通过disabled属性控制点击状态

``` html
  <p-link type="yellow" disabled>黄色</p-link>
  <p-link type="green" disabled>绿色</p-link>
```
<p-link type="yellow" disabled >黄色</p-link>
<p-link type="green" disabled>绿色</p-link>

### 下划线
> 通过underline控制是否显示下划线

``` html
  <p-link type="yellow" >下划线</p-link>
  <p-link type="green" :underline="false">无下划线</p-link>
```
<p-link type="yellow" >下划线</p-link>
<p-link type="green" :underline="false">无下划线</p-link>

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   yellow / green / red / blue / gray / pepper |     ''    |
| href     | 跳转目的链接   | string  |   -        |    -    |
| target     | 跳转方式   | string  |   self / blank      |    blank    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| underline     | 是否显示下划线   | boolean    | — | true   |