<template>
  <div
    class="memo"
    :style="styles(top, left)"
  >
    <div
      class="agenda"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
    >
      <div
        class="minus"
        @click="minus"
      >
        X
      </div>
    </div>
    <textarea class="content" />
  </div>
</template>

<script lang="ts">
import { Prop, Emit, Component, Vue } from 'vue-property-decorator'

@Component
export default class Memo extends Vue {
  // props
  @Prop() top: number;
  @Prop() left: number;
  @Prop() index: number;

  // data
  public isDragging: boolean = false;

  // emit
  @Emit()
  mouseMove(obj: { top: number, left: number, index: number }) {};

  @Emit()
  minus() {}

  // methods
  onMouseDown(e: any): void {
    this.isDragging = true
  }

  onMouseMove(e: any): void {
    if (this.isDragging) {
      // topの-30とleftの-80はメモをdrag&dropで移動する際カーソルズレによって左側方向に移動できない事を回避するために付与
      this.mouseMove({ top: e.pageY - 30, left: e.pageX - 80, index: this.index })
    }
  }

  onMouseUp(e: any): void {
    this.isDragging = false
  }

  styles(top: number, left: number) {
    return ({
      top: `${top}px`,
      left: `${left}px`
    })
  }
}
</script>

<style>
.memo {
  height: 300px;
  width: 200px;
  position: absolute;
  background-color: red;
}
.agenda {
  height: 50px;
  width: 200px;
}
.content {
  height: 250px;
  width: 200px;
}
.minus {
  text-align: center;
  margin-left: 160px;
  margin-top: 5px;
  font-size: 30px;
  border-radius: 50%;
  width: 30px;
  height: 37px;
  color: #FFF;
  border: solid 1px #FFF;
}
</style>
