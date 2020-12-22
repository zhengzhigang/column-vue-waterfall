# column-vue-waterfall

> 分列布局的瀑布流组件，无需知道每个卡片的具体高度，但是你始终应该提供一个默认高度，此高度不会作为最终高度展示
> 卡片样式尺寸完全自定义

## Build Setup

``` bash
# 安装
npm install column-vue-waterfall
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
    <div class="home">
      <waterfall
        :data="items"
        :column="2"
        :gutter="17"
        @reflowed="reflowed"
      >
        <template v-slot="item">
          <!-- 自定义卡片,尺寸样式完全自定义 -->
          <div class="item" :style="{...item.style, height: item.height + 'px'}">{{item.index}}</div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<script>
import { Waterfall } from 'column-vue-waterfall'

export default {
  name: 'app',
  components: {
    Waterfall
  },
  data() {
    return {
      items: [{}]
    }
  }
}
</script>
```


## Options
|  Attribute   | Description  |  Type  |  Accepted Values  |  Default  |
|  ----------  | -----------  |  ----  |  ---------------  |  -------  |
| data         | 渲染的数据     | Array | 必须包含 __height |  []        |
| column       | 列数          | number |  -                |  2        |
| gutter       |  列间距 |     | number |  -                |  10       |
| autoResize   | 设备宽度变化是否重新渲染 |  boolead  |  true/false  |  true  |
