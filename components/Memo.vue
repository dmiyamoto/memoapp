<template>
  <div
    class="memo"
    :style="{
      top: `${top}px`,
      left: `${left}px`
    }"
  >
    <div class="handle" @mousedown="onMousedown">
      <div
        class="minus"
        @click="$emit('minus')"
      >
        X
      </div>
    </div>
    <editor :index="index" />
  </div>
</template>

<script>
import Editor from '~/components/Editor.vue'

export default {
  components: {
    Editor
  },
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  background: #f00;
  width: 200px;
  height: 300px;
}
.handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #900;
  cursor: move;
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
