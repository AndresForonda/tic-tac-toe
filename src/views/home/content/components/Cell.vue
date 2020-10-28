<template>
  <div
    class="cell"
    :class="{
      br,
      bl,
      bt,
      bb
    }"
  >
    {{ player }}
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: String,
      default: null
    },
    br: {
      type: Boolean,
      default: false
    },
    bl: {
      type: Boolean,
      default: false
    },
    bt: {
      type: Boolean,
      default: false
    },
    bb: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.cell {
  width: 100px;
  height: 100px;
  font-size: 80px;
}
.br {
  border-right: 1px solid #fff;
}
.bl {
  border-left: 1px solid #fff;
}
.bt {
  border-top: 1px solid #fff;
}
.bb {
  border-bottom: 1px solid #fff;
}
</style>
