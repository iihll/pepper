# Input

### purpple 统一了input和textarea的样式
### 类型
``` html
  <p-input value="我是一个input" ></p-input>
  <p-input value="我是一个textarea" textarea></p-input>
```

<p-input value="我是一个input" ></p-input>
<p-input value="我是一个textarea" textarea></p-input>

### 只读
``` html
  <p-input value="这个是只读的input" readonly></p-input>
  <p-input value="这个是只读的textarea" textarea readonly></p-input>
```
  <p-input value="这个是只读的input" readonly></p-input>
  <p-input value="这个是只读的textarea" textarea readonly></p-input>

### 禁用
``` html
  <p-input value="这个是禁用的input" disabled></p-input>
  <p-input value="这个是禁用的textarea" textarea disabled></p-input>
```
  <p-input value="这个是禁用的input" disabled></p-input>
  <p-input value="这个是禁用的textarea" textarea disabled></p-input>

### 高度自适应
> 高度自适应只有在 textarea 元素上才会生效
``` html
  <p-input placeholder="这个是高度没有自适应的textarea" textarea></p-input>
  <p-input placeholder="这个是高度自适应的textarea" textarea rows="2" autoHeight></p-input>
```
  <p-input placeholder="这个是高度没有自适应的textarea" textarea></p-input>
  <p-input placeholder="这个是高度自适应的textarea" textarea rows="2" autoHeight></p-input>

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|--------- |-------- |---------- |-------------  |-------- |
| value（v-model）     | 传入的值   | aString    | — | ''   |
| placeholder | 输入框占位文字   | String    | — | ''   |
| size     | 尺寸   | string  |   s, m, l      |    m     |
| textarea | 是否textarea类型   | boolean    | - | false | 
| readonly  | 是否只读状态    | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| autoHeight | 是否开启自适应高度功能 | boolean   |  —  |  false  |
| rows | 只针对textarea元素生效，控制行高 | Number / String   |  —  |  3  |

### 事件
| 参数      | 说明    | 返回数据   |
| -------- | ------- | --------- |
| change   | 监听input值改变的事件 | Event     |