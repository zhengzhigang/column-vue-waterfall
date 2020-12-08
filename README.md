# vue-sticky-header

> vue粘性导航，rem布局，以750宽度设计稿为准
> 插件只完成粘性功能，导航样式需要自己完成

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
