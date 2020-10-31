<template>
  <!-- Bassed on the selected br, bl, bt and bb, use the classes -->
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
    // Receive the value of the player (pizza or taco) who pressed the button mapped to this cell
    player: {
      type: String,
      default: null
    },
    // add a border to the cell in the desired side
    // br: border-rigth border
    br: {
      type: Boolean,
      default: false
    },
    // bl: border-left border
    bl: {
      type: Boolean,
      default: false
    },
    // bt: border-top border
    bt: {
      type: Boolean,
      default: false
    },
    // bb: border-border border
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
/* Classes to add a border to a selected side */
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
