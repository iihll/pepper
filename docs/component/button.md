# Button
### 颜色
``` html
  <p-button type="yellow">黄色</p-button>
  <p-button type="green">绿色</p-button>
  <p-button type="red">红色</p-button>
  <p-button type="blue">蓝色</p-button>
  <p-button type="purple">主题色</p-button>
```
<p-button type="yellow">黄色</p-button>
<p-button type="green">绿色</p-button>
<p-button type="red">红色</p-button>
<p-button type="blue">蓝色</p-button>
<p-button type="purple">主题色</p-button>

### 大小
``` html
  <p-button size="s">small</p-button>
  <p-button size="m">middle</p-button>
  <p-button size="l">Large</p-button>
```
<p-button size="s">small</p-button>
<p-button size="m">middle</p-button>
<p-button size="l">Large</p-button>

### 圆角
``` html
  <p-button circle color="green">small</p-button>
  <p-button circle color="red">middle</p-button>
  <p-button circle color="purple">Large</p-button>
```
<p-button circle color="green">small</p-button>
<p-button circle color="red">middle</p-button>
<p-button circle color="purple">Large</p-button>

### 圆角
``` html
  <p-button circle color="green">small</p-button>
  <p-button circle color="red">middle</p-button>
  <p-button circle color="purple">Large</p-button>
```
<p-button circle color="green">small</p-button>
<p-button circle color="red">middle</p-button>
<p-button circle color="purple">Large</p-button>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|--------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   s, m, l            |    m     |
| type     | 类型   | string    |   yellow, green, red, purple |     purple    | 
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| block  | 是否块级元素 | boolean   |  —  |  false  |

### 事件
| 参数      | 说明    | 返回数据   |
| -------- | ------- | --------- |
| click    | 点击事件 | Event     |