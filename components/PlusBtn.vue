<template>
  <div
    class="plus"
    @click="$emit('plus')"
  >
    +
  </div>
</template>

<style>
.plus {
  font-size: 30px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  border: solid 5px #0000ff;
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>
