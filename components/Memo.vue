<template>
  <div
    class="memo"
    :style="{
      top: `${top}px`,
      left: `${left}px`
    }"
  >
    <div
      class="agenda"
      @mousedown="onMouseDown"
    >
      <div
        class="minus"
        @click="$emit('minus')"
      >
        X
      </div>
    </div>
    <textarea class="content" />
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onMouseDown(e) {
      this.$emit('dragstart', {
        x: e.pageX,
        y: e.pageY
      })
    }
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
