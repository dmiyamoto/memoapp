<template>
  <section class="container">
    <memo
      v-for="(value, index) in memoPositions"
      :key="index"
      :index="index"
      :top="value.top"
      :left="value.left"
      @minus="minusMemo(index)"
      @mouse-move="mouseMove"
    />
    <plus-btn @plus="plusMemo" />
  </section>
</template>

<script lang="ts">
import Memo from '~/components/Memo.vue'
import PlusBtn from '~/components/PlusBtn.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Memo,
    PlusBtn
  }
})

export default class index extends Vue {
  // data
  public memoPositions: Array<{ top?: number, left?: number }> = [];

  // methods
  plusMemo(): void {
    const widthCount: number = Math.floor(window.innerWidth / 250)
    this.memoPositions = [
      ...this.memoPositions,
      {
        top: Math.floor(this.memoPositions.length / widthCount) * 350,
        left: (this.memoPositions.length % widthCount) * 250
      }
    ]
  }

  minusMemo(index: number): void {
    this.memoPositions = [...this.memoPositions]
    this.memoPositions.splice(index, 1)
  }

  mouseMove(position: { top: number; left: number; index: number; }): void {
    this.memoPositions = [...this.memoPositions]
    this.memoPositions[position.index].top = position.top
    this.memoPositions[position.index].left = position.left
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  background: url('../assets/back.jpg')
}
</style>
