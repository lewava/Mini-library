<template>
  <div class="container">
    <img src="../assets/arrow.png" alt="back" @click="$router.push('/')"/>
    <div class="inner-container">
      <div
        class="book"
        :class="{
          one: book.id === 1,
          two: book.id === 2,
          three: book.id === 3,
          four: book.id === 4,
          five: book.id === 5,
          six: book.id === 6,
          seven: book.id === 7,
          eight: book.id === 8,
        }"
      >
        <div class="line"></div>
        <div class="book-text">
          <h1>{{ book.title }}</h1>
          <p>{{ book.author }}</p>
        </div>
      </div>
      <div class="text">
        <h1>{{ book.title }}</h1>
        <h5>By {{ book.author }}</h5>
        <p class="desc">{{ book.description }}</p>
        <div class="info">
          <div class="box">
            <p><span>Audience: </span>{{ book.audience }}</p>
            <p><span>Pages: </span>{{ book.pages }}</p>
          </div>
          <div class="box">
            <p><span>First published: </span>{{ book.published }}</p>
            <p><span>Publisher: </span>{{ book.publisher }}</p>
          </div>
        </div>
        <button>Oh, I want to read it!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      const id = this.$route.params.id;

      return this.$store.getters.getBookById(id);
    },
  },
};
</script>

<style scoped>
.container {
  background: black;
  opacity: 0.8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 80px;
}
.inner-container {
  display: flex;
}
img {
  width: 45px;
  margin-bottom: 40px;
  margin-right: 790px;
  cursor: pointer;
}
.book {
  background: green;
  height: 500px;
  width: 410px;
  border-radius: 4px;
  color: white;
  display: flex;
}
.line {
  background: rgb(83, 83, 83);
  height: 100%;
  width: 5px;
  margin-left: 40px;
}
.book-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.book h1 {
  text-align: center;
  text-transform: capitalize;
  padding: 20px;
}
.book p {
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  text-transform: capitalize;
  padding: 10px;
}
.text {
  margin-left: 40px;
}
.text h1 {
  color: white;
  margin-bottom: 5px;
}
h5 {
  color: rgb(187, 184, 184);
  margin-bottom: 20px;
}
.desc {
  width: 400px;
  color: rgb(187, 184, 184);
  margin-bottom: 20px;
}
.info {
  background: rgb(15, 15, 15);
  width: 350px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
}
span {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.info p {
  color: rgb(187, 184, 184);
  font-size: 12px;
  margin-bottom: 8px;
}
.box {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
button {
  padding: 12px;
  width: 200px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  outline: none;
}
.one {
  background: yellow;
}
.two {
  background: orange;
}
.three {
  background: red;
}
.four {
  background: rgb(231, 43, 231);
}
.five {
  background: lightblue;
}
.six {
  background: rgb(11, 120, 163);
}
.seven {
  background: lightgreen;
}
.eight {
  background: darkgreen;
}
</style>