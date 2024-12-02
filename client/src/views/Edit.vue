<template>
  <div class="edit-word">
    <h1>Edit Word</h1>
    <form action="" @submit.prevent="onSubmit" class="edit-word__form">
      <div class="edit-word__input-group">
        <div class="edit-word__label"><i class="vietnam flag"></i>Vietnamese</div>
        <input type="text" required v-model="word.vietnamese" class="edit-word__input"/>
      </div>
      <br />
      <div class="edit-word__input-group">
        <div class="edit-word__label">English</div>
        <input type="text" required v-model="word.english" class="edit-word__input"/>
      </div>
      <br />
      <button class="edit-word__submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import '/src/styles.css'
import { ViewVocab, EditVocab } from "../helpers/api";
export default {
  name: "Edit",
  data() {
    return {
      word: {},
    };
  },
  async mounted() {
    this.word = await ViewVocab(this.$route.params.id);
  },
  methods: {
    onSubmit: async function () {
      await EditVocab(this.$route.params.id, this.word);
      this.flash("Edit word succeed !");
      this.$router.push("/words");
    },
  },
};
</script>

<style scoped>
.edit-word {
  width: 50%;
  margin: auto;
}

.edit-word__form {
  display: flex;
  flex-direction: column;
}

.edit-word__input-group {
  margin-bottom: 15px;
}

.edit-word__label {
  font-weight: bold;
}

.edit-word__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.edit-word__submit-btn {
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
