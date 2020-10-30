<template>
  <div>
    <transition name="fade">
      <winner-banner
        :winner="winner"
        v-show="somebodyWon"
        @restart-game="restartGame"
      />
    </transition>
    <div class="app-title">Pizz Tac Coe</div>
    <div class="row">
      <cell :player="ticTacToeField['1']" br bb />
      <cell :player="ticTacToeField['2']" br bb />
      <cell :player="ticTacToeField['3']" bb />
    </div>
    <div class="row">
      <cell :player="ticTacToeField['4']" br bb />
      <cell :player="ticTacToeField['5']" br bb />
      <cell :player="ticTacToeField['6']" bb />
    </div>
    <div class="row">
      <cell :player="ticTacToeField['7']" br />
      <cell :player="ticTacToeField['8']" br />
      <cell :player="ticTacToeField['9']" />
    </div>
  </div>
</template>
<script>
import Cell from "./components/Cell";
import WinnerBanner from "./components/WinnerBanner";

const initialTicTacToe = {
  "1": null,
  "2": null,
  "3": null,
  "4": null,
  "5": null,
  "6": null,
  "7": null,
  "8": null,
  "9": null
}

export default {
  name: "ContentBoard",
  components: {
    Cell,
    WinnerBanner
  },
  sockets: {
    connect() {
      console.log("[Connected to socket]")
    },
    movement({ digit, number }) {
      this.makeMovement(digit, number);
    }
  },
  data: () => ({
    somebodyWon: false,
    winner: "",
    player1: "🍕",
    player2: "🌮",
    turn: "5000",
    ticTacToeField: { ...initialTicTacToe }
  }),
  methods: {
    restartGame() {
      this.somebodyWon = false;
      this.ticTacToeField = { ...initialTicTacToe };
      this.$socket.client.emit("playAgain");
    },
    makeMovement(digit, number) {
      console.log(digit, number);
      if (this.turn === number) {
        this.ticTacToeField[digit] =
          number === "5000" ? this.player1 : this.player2;
        const winner = this.validateWin();
        if (winner) {
          this.somebodyWon = true;
          this.winner = this.turn === "5000" ? this.player1 : this.player2;
        }
        // this.$socket.client.emit("message");
        this.nextTurn();
      }
    },
    nextTurn() {
      this.turn === "5000" ? (this.turn = "5001") : (this.turn = "5000");
    },
    validateWin() {
      return (
        this.validateThreeInline(1, 2, 3) ||
        this.validateThreeInline(4, 5, 6) ||
        this.validateThreeInline(7, 8, 9) ||
        this.validateThreeInline(1, 4, 7) ||
        this.validateThreeInline(2, 5, 8) ||
        this.validateThreeInline(3, 6, 9) ||
        this.validateThreeInline(1, 5, 9) ||
        this.validateThreeInline(3, 5, 7)
      );
    },
    validateThreeInline(a, b, c) {
      if (
        !this.ticTacToeField[a] ||
        !this.ticTacToeField[b] ||
        !this.ticTacToeField[c]
      )
        return false;
      return (
        this.ticTacToeField[a] === this.ticTacToeField[b] &&
        this.ticTacToeField[b] === this.ticTacToeField[c]
      );
    }
  }
};
</script>

<style scoped>
.app-title {
  font-family: "Just Another Hand", cursive;
  font-size: 300px;
  padding: 0px;
  color: #fff;
}

.row {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
