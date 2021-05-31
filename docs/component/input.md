# Input
### 类型
> 通过textArea属性控制input的类型，input（默认） / textAare 

``` html
  <p-input placeholder="这是一个input" ></p-input>
  <p-input textArea placeholder="这是一个testarea" ></p-input>
```
<p-input placeholder="这是一个input" ></p-input>
<p-input textArea placeholder="这是一个testarea" ></p-input>


### 禁用
> 通过disabled属性控制input的输入状态

``` html
  <p-input placeholder="这是一个input"></p-input>
  <p-input disabled placeholder="这是一个被禁用input"></p-input>
  <p-input textArea disabled placeholder="这是一个被禁用testarea"></p-input>
```
<p-input disabled placeholder="这是一个被禁用input"></p-input>
<p-input textArea disabled placeholder="这是一个被禁用testarea"></p-input>

### 只读
> 通过readonly属性控制input的读写状态

``` html
  <p-input placeholder="这是一个input"></p-input>
  <p-input readonly placeholder="这是一个只读input"></p-input>
  <p-input textArea readonly placeholder="这是一个只读testarea"></p-input>
```
<p-input placeholder="这是一个input"></p-input>
<p-input readonly placeholder="这是一个只读input"></p-input>
<p-input textArea readonly placeholder="这是一个只读testarea"></p-input>

### 自适应高度
> 通过autoSize属性开启组件的高度自适应功能

``` html
  <p-input placeholder="这是一个input" autoSize></p-input>
  <p-input textArea placeholder="这是一个只读testarea" autoSize></p-input>
```
<p-input placeholder="这是一个input" autoSize></p-input>
<p-input textArea placeholder="这是一个只读testarea" autoSize></p-input>

### 参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| valye / v-model     | 绑定值   | string  | — | — |
| placeholder     | 输入框展位文字   | string  | — |    ''    |
| textArea     | textAreak类型 （默认input）   | boolean  | — |    false    |
| readonly     | 是否只读类型   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| autoSize  | 是否开启高度自适应 | boolean   |  —  |  false  |