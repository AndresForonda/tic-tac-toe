<template>
  <div>
    <!-- Transition wrapper, adds a fade-in fade-out effect when mounting/unmounting the component -->
    <transition name="fade">
      <!-- Winner banner component, show only if somebodyWon is true,
      listen for the restart-game event -->
      <winner-banner
        :winner="winner"
        v-show="somebodyWon"
        @restart-game="restartGame"
      />
    </transition>
    <transition name="fade">
      <!-- Draw banner component, show only if draw is true,
      listen for the restart-game event -->
      <draw-banner v-show="draw" @restart-game="restartGame" />
    </transition>
    <div class="app-title">Pizz Tac Coe</div>
    <!-- Board component -->
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
    <!-- Show the player who can play in the current turn -->
    <turn :player="player" :number="turn" />
  </div>
</template>
<script>
// Import the required components for the view
import Cell from "./components/Cell";
import WinnerBanner from "./components/WinnerBanner";
import DrawBanner from "./components/DrawBanner";
import Turn from "./components/Turn";

// Variable used as initial state for the board
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
};

export default {
  // Component name
  name: "ContentBoard",
  components: {
    // Register the components
    Cell,
    DrawBanner,
    Turn,
    WinnerBanner
  },
  sockets: {
    // Listen for events comming from the server through socketIO
    connect() {
      // On connect event do this
      console.log("[Connected to socket]");
      this.restartGame();
      this.nextTurn();
    },
    movement({ digit, number }) {
      // On movement event do this
      this.makeMovement(digit, number);
    }
  },
  computed: {
    // Computed properties
    // Computed property that returns the emoji of the current player
    player() {
      return this.turn === "5000" ? this.player1 : this.player2;
    }
  },
  data: () => ({
    // Initial component data
    draw: false,
    player1: "🍕",
    player2: "🌮",
    somebodyWon: false,
    ticTacToeField: { ...initialTicTacToe },
    turn: "5000",
    winner: ""
  }),
  methods: {
    // On draw or if somebody won, a restart must be called
    restartGame() {
      // Initialize some variables
      this.somebodyWon = false;
      this.draw = false;
      this.ticTacToeField = { ...initialTicTacToe };
      // Set the next turn
      this.nextTurn();
      // Emmit the event to start a new game and clean the store in the backend
      this.$socket.client.emit("playAgain");
    },
    // Make a movement function
    makeMovement(digit, number) {
      // Validate if the event comes from the player that is actually playing
      if (this.turn === number) {
        this.ticTacToeField[digit] =
          number === "5000" ? this.player1 : this.player2; // Asing a value to the board based on the player and the pressed digit
        // Validate if the player in the current turn won
        if (this.validateWin()) {
          this.somebodyWon = true; // Inform to the application that somebody wons
          this.winner = this.turn === "5000" ? this.player1 : this.player2; // Based on the current turn, set the winner
          // Check if the game is draw
        } else if (this.validateDraw()) {
          this.draw = true; // Inform to the application that the game is draw
        } else {
          // If no winner, no draw, continue
          this.nextTurn(); // Go to the next turn
        }
      }
    },
    // Go to the next turn
    nextTurn() {
      this.turn === "5000" ? (this.turn = "5001") : (this.turn = "5000"); // Based on the current turn, set the next turn
      this.$socket.client.emit("setTurn", this.turn); // Emit an event to inform to the backent who is the next player to play using socketIO
    },
    // Validate if the game is draw
    validateDraw() {
      let draw = true; // Game in draw by default
      for (let i = 1; i <= 9; i += 1) {
        // If there is at least one position in the board with a null value, then the game is not draw
        if (!this.ticTacToeField[i]) {
          draw = false; // set draw to false to inform that the game is not draw
        }
      }
      return draw;
    },
    // Validate if someone win
    validateWin() {
      // Validate all the possible win combinations
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
    /**
     * Receive three values and compare them,
     * if all are the same, return true, otherwise return false
     */
    validateThreeInline(a, b, c) {
      // Validate not Null values
      if (
        !this.ticTacToeField[a] ||
        !this.ticTacToeField[b] ||
        !this.ticTacToeField[c]
      )
        return false;
      return (
        this.ticTacToeField[a] === this.ticTacToeField[b] &&
        this.ticTacToeField[b] === this.ticTacToeField[c] // compare a = b = c, return true if they are the same
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
