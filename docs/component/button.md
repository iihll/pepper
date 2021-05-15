# Button

### 颜色
> 通过type属性控制组件的主题类型，颜色

``` html
  <p-button type="yellow" >黄色</p-button>
  <p-button type="green" >绿色</p-button>
  <p-button type="red" >红色</p-button>
  <p-button type="blue" >蓝色</p-button>
  <p-button type="gray" >灰色</p-button>
  <p-button type="pepper" >紫色</p-button>
```
<p-button type="yellow" >黄色</p-button>
<p-button type="green" >绿色</p-button>
<p-button type="red" >红色</p-button>
<p-button type="blue" >蓝色</p-button>
<p-button type="gray" >灰色</p-button>
<p-button type="pepper" >紫色</p-button>

### 大小
> 通过size属性控制组件的尺寸大小

``` html
  <p-button type="yellow" size="s" >small</p-button>
  <p-button type="green" size="m" >middle</p-button>
  <p-button type="red" size="l" >Large</p-button>
```
<p-button type="yellow" size="s" >small</p-button>
<p-button type="green" size="m" >middle</p-button>
<p-button type="red" size="l" >Large</p-button>

### 禁用
> 通过disabled属性控制点击状态

``` html
  <p-button type="yellow" disabled >黄色</p-button>
  <p-button type="green" text disabled>绿色</p-button>
  <p-button type="red" circle disabled>红色</p-button>
```
<p-button type="yellow" disabled >黄色</p-button>
<p-button type="green" text disabled>绿色</p-button>
<p-button type="red" circle disabled>红色</p-button>

### 圆角
> 通过circle控制圆角状态

``` html
  <p-button type="yellow" circle>黄色</p-button>
  <p-button type="green" text circle>绿色</p-button>
```
<p-button type="yellow" circle>黄色</p-button>
<p-button type="green" text circle>绿色</p-button>
### 文本
> 通过text属性控制文本文档样式

``` html
  <p-button type="blue" text>蓝色</p-button>
  <p-button type="green" text>绿色</p-button>
```
<p-button type="blue" text>蓝色</p-button>
<p-button type="green" text>绿色</p-button>

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   s / m / l            |    m    |
| type     | 类型   | string    |   yellow / green / red / blue / gray / pepper |     ''    |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| text  | 是否文本文档 | boolean   |  —  |  false  |