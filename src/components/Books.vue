<template>
  <div class="wrapper">
    <h1>8 Classic children books</h1>
    <div class="container">
      <div
        class="book"
        v-for="book in books"
        :key="book.id"
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
        @click="openBook(book.id)"
      >
        <div class="line"></div>
        <div class="text">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openBook(id) {
      this.$router.push('/book/' + id)
    }
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 800px;
}
h1 {
  width: 800px;
  text-align: left;
  padding: 20px;
}
.book {
  width: 200px;
  height: 300px;
  box-sizing: border-box;
  border-radius: 2px;
  color: white;
  display: flex;
  border: 1px solid rgb(95, 95, 95);
}
.line {
  background: rgb(95, 95, 95);
  height: 100%;
  width: 2px;
  margin-left: 15px;
}
.text {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
h3 {
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
}
p {
  font-size: 10px;
  font-weight: bold;
  text-align: right;
  text-transform: capitalize;
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