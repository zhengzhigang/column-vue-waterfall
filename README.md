# vue-sticky-header

> 分列布局的瀑布流组件，无需知道每个卡片的具体高度，但是你始终应该提供一个默认高度，此高度不会作为最终高度展示
> 卡片样式尺寸完全自定义

## Build Setup

``` bash
# 安装
npm install vue-sticky-header
```

### 全局使用
```js
import waterfall from 'column-vue-waterfall'

Vue.use(waterfall)
```

### 页面内使用
```js
template>
  <div id="app">
    <sticky :stickyTop="90">
        <div v-for="item in ['nav1', 'nav2', 'nav3']">{{ item }}</div>
    </sticky>
  </div>
</template>

<script>
import { Waterfall } from 'column-vue-waterfall'

export default {
  name: 'app',
  components: {
    Waterfall
  }
}
</script>
```


## Options
|  Attribute   | Description  |  Type  |  Accepted Values  |  Default  |
|  ----------  | -----------  |  ----  |  ---------------  |  -------  |
| data         | 渲染的数据     | Array | 必须包含width和height |  []        |
| column       | 列数          | number |  -                |  2        |
| gutter       |  列间距 |     | number |  -                |  10       |
| itemGap      | 卡片间距      |  number |               -  |  10        |
| autoResize   | 设备宽度变化是否重新渲染 |  boolead  |  true/false  |  true  |
| isRem  |  是否使用rem布局  |  boolean  |  true/false  |  true  |
| baseWidth  |  设计稿宽度  |  number  |  -  |  750  |
| remBase  |  rem布局基数  |  number  |  -  |  75  |
