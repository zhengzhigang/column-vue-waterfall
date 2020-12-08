<template>
    <div class="waterfall-wraper" style="overflow: hidden;">
        <div
            class="column"
            :class="{'no-margin': i === columnSet.length - 1}"
            v-for="(columnItem, i) in columnSet"
            :key="i"
            :ref="`_column${i}`"
            :style="getColumnStyle"
        >
            <div
                class="column-item"
                v-for="(item, index) in columnList[`_column${i}`]"
                :key="index"
                :style="cardGapStyle"
            >
                <slot v-bind="item"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import {on, off} from '../util/util'

export default {
    name: 'Waterfall',

    data() {
        return {
            clientWidth: 375,
            columnSet: [],
            columnList: {},
            count: 0
        }
    },

    props: {
        column: {
            type: [Number, String],
            default: 2
        },
        gutter: {
            type: [Number, String],
            default: 10
        },
        itemGap: {
            type: [Number, String],
            default: 10
        },
        data: {
            type: Array,
            default: () => []
        },
        autoResize: {
            default: true
        },
        isRem: {
            type: Boolean,
            default: false
        },
        remBase: {
            type: Number,
            default: 75
        },
        baseWidth: {
            type: Number,
            default: 750
        }
    },

    computed: {
        ratio() {
            return this.baseWidth / window.screen.width
        },
        getColumnStyle() {
            const c = +this.column
            const w = this.clientWidth
            const gutter = +this.gutter
            console.log('&&&&', w, (w - (gutter * (c - 1))) / c)
            return {
                float: 'left',
                marginRight: this.getRemStyle(gutter),
                minWidth: this.getRemStyle((w - (gutter * (c - 1))) / c),
            }
        },
        cardGapStyle() {
            return {
                marginTop: this.getRemStyle(+this.itemGap)
            }
        }
    },

    watch: {
        data() {
            this.reflowHandler()
        }
    },

    created() {
        this.$watch(() => (
            this.column
        ), this.reflowHandler)
        this.reflowHandler()
    },

    mounted() {
        this.$watch('autoResize', this.autoResizeHandler)
        this.autoResizeHandler(this.autoResize)
    },

    destroyed() {
        this.autoResizeHandler(false)
    },

    methods: {
        reflowHandler() {
            if (this.columnSet.length !== +this.column) {
                this.columnSet = new Array(+this.column).fill(0)
                this.columnList = {}
                this.columnSet.forEach((item, i) => {
                    this.$set(this.columnList, `_column${i}`, [])
                })
            }
            this.$nextTick(() => {
                this.reflow()
                this.$emit('reflowed')
            })
        },

        reflow() {
            const el = this.$el
            if (!el) return
            this.clientWidth = el.clientWidth
            this.insert()
        },

        insert() {
            this.initColumnHeight()
            const list = this.data
            const newList = list.length === this.count ? list : list.slice(this.count)
            newList.map(item => {
                const minIndex = this.getMinColumn()
                this.columnList[`_column${minIndex}`].push(item)
                this.setColumnNewHeight(minIndex, item.height + Number(this.itemGap))
            })
            this.count = this.data.length
        },

        initColumnHeight() {
            const refs = this.$refs
            for (let i in refs) {
                if (!refs[i] || !refs[i].length) {
                    delete refs[i]
                    return
                }
                let columnIndex = +i.substring(i.length - 1)
                this.columnSet[columnIndex] = refs[i][0].offsetHeight || 0
            }
        },

        getMinColumn() {
            const minNum = Math.min(...this.columnSet)
            return this.columnSet.findIndex(i => i === minNum)
        },

        setColumnNewHeight(i, height) {
            this.columnSet[i] = this.columnSet[i] + height
        },

        autoResizeHandler (autoResize) {
            if (autoResize === false || !this.autoResize) {
                off(window, 'resize', this.reflowHandler, false)
            } else {
                on(window, 'resize', this.reflowHandler, false)
            }
        },

        getRemStyle(t) {
            return this.isRem ? t / this.remBase + 'rem' : t + 'px'
        }
    }
}
</script>
<style scoped lang="scss">
.column {
    float: left;
    &.no-margin {
        margin-right: 0 !important;
    }
    .column-item {
        overflow: hidden;
    }
}
</style>
