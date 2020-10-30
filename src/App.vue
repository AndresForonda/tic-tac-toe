<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "./views/home/Layout";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
body {
  font-family: "PTSansRegular";
  font-size: 14px;
  color: #666666;
}

.left,
.left-side,
.pull-left {
  float: left;
}
.right,
.right-side,
.pull-right {
  float: right;
}
.clear {
  clear: both;
}
.clearfix:after {
  clear: both;
  content: "";
  display: block;
}
a img {
  border: 0px;
}
a {
  text-decoration: none;
  color: #0d6bb2;
}
a:hover {
  color: #b9baba;
}

.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.vertical-align {
  vertical-align: top;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}

li {
  list-style-type: none;
}
.underline {
  text-decoration: underline;
}
img {
  max-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  /* margin-top: 60px; */
}

.linear-orange-background {
  background: linear-gradient(
    0deg,
    rgba(246, 119, 46, 1) 0%,
    rgba(253, 45, 45, 1) 100%
  );
}
</style>
