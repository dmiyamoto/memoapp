<template>
  <section
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    class="container"
  >
    <memo
      v-for="(value, index) in memoPositions"
      :key="index"
      :top="value.top"
      :left="value.left"
      @minus="minusMemo(index)"
      @mouse-move="mouseMove"
      @dragstart="onDragStart($event, index)"
    />
    <plus-btn @plus="plusMemo" />
  </section>
</template>

<script>
import Memo from '~/components/Memo.vue'
import PlusBtn from '~/components/PlusBtn.vue'

export default {
  components: {
    Memo,
    PlusBtn
  },
  data() {
    return {
      draggingIndex: null,
      prevX: null,
      prevY: null,
      memoPositions: []
    }
  },
  methods: {
    plusMemo() {
      const widthCount = Math.floor(window.innerWidth / 250)
      this.memoPositions = [
        ...this.memoPositions,
        {
          top: Math.floor(this.memoPositions.length / widthCount) * 350,
          left: (this.memoPositions.length % widthCount) * 250
        }
      ]
    },
    minusMemo(index) {
      this.memoPositions = [...this.memoPositions]
      this.memoPositions.splice(index, 1)
    },
    onDragStart({ x, y }, index) {
      this.draggingIndex = index
      this.prevX = x
      this.prevY = y
    },
    onMouseMove(e) {
      if (this.draggingIndex === null) return

      const x = e.pageX
      const y = e.pageY
      const target = { ...this.memoPositions[this.draggingIndex] }
      target.left += x - this.prevX
      target.top += y - this.prevY

      this.memoPositions = [...this.memoPositions]
      this.memoPositions[this.draggingIndex] = target

      this.prevX = x
      this.prevY = y
    },
    onMouseUp() {
      this.draggingIndex = null
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  background: url('../assets/back.jpg')
}
</style>
