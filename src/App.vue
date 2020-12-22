<template>
  <div id="app">
    <div class="home">
      <waterfall
        :data="items"
        :column="2"
        :gutter="15"
        @reflowed="reflowed"
      >
        <template v-slot="item">
          <!-- 自定义卡片,尺寸样式完全自定义 -->
          <div class="item" :style="{...item.style, height: item.__height + 'px'}">{{item.index}}</div>
        </template>
      </waterfall>
    </div>
  </div>
</template>
<script>
import get from './item-factory'
import Waterfall from './lib/components/waterfall'
export default {
  name: 'Home',

  components: {
    Waterfall
  },

  data() {
    return {
      items: get.get(20),
      timer: null,
      isBusy: false,
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop + window.innerHeight >= document.body.clientHeight) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.addItems()
        }, 1000)
      }
    })
  },

  methods: {
    reflowed() {
      this.isBusy = false
    },
    addItems() {
      if (!this.isBusy && this.items.length < 5000) {
        this.isBusy = true
        this.items.push.apply(this.items, get.get(20))
      }
    },
  }

}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home {
  padding: 20px 15px;
  background: linear-gradient(to bottom, #fff 0px, #f6f6f6 160px);;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  margin-top: 10px;
  overflow: hidden;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
body {
  margin: 0;
}
.waterfall-card {
  border-radius: 12px;
  overflow: hidden;
}

</style>
