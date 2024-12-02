<template>
  <div class="new-word">
    <h1>Add New Word</h1>
    <form action="" @submit.prevent="onSubmit" class="new-word__form">
      <div class="new-word__input-group">
        <label for="vietnamese" class="new-word__label">Vietnamese</label>
        <input id="vietnamese" type="text" required v-model="word.vietnamese" class="new-word__input"/>
      </div>
      <br />
      <div class="new-word__input-group">
        <label for="english" class="new-word__label">English</label>
        <input id="english" type="text" required v-model="word.english" class="new-word__input"/>
      </div>
      <br />
      <button class="new-word__submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import '/src/styles.css'
import { AddVocab } from "../helpers/api";
export default {
  name: "New",
  data() {
    return {
      word: {},
    };
  },
  methods: {
    onSubmit: async function () {
      await AddVocab(this.word);
      this.flash("Add new word succeed !");
      this.$router.push("/words");
    },
  },
};
</script>

<style scoped>
.new-word {
  width: 50%;
  margin: auto;
}

.new-word__form {
  display: flex;
  flex-direction: column;
}

.new-word__input-group {
  margin-bottom: 15px;
}

.new-word__label {
  font-weight: bold;
}

.new-word__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.new-word__submit-btn {
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
