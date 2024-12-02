<template>
  <div class="container">
    <div class="form-wrapper">
      <h1>Show Word Details</h1>
      <div class="word-detail__group">
        <label for="vietnamese" class="word-detail__label">Vietnamese</label>
        <input type="text" id="vietnamese" v-model="word.vietnamese" disabled class="word-detail__input" />
      </div>
      <br />
      <div class="word-detail__group">
        <label for="english" class="word-detail__label">English</label>
        <input type="text" id="english" v-model="word.english" disabled class="word-detail__input" />
      </div>
      <br />
      <div class="word-detail__buttons">
        <router-link :to="{ name: 'Edit', params: { id: this.$route.params.id } }" class="word-detail__edit-btn">
          Edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '/src/styles.css'
import { ViewVocab } from '../helpers/api';
export default {
  name: "Show",
  data() {
    return {
      word: "",
    };
  },
  async mounted() {
     this.word = await ViewVocab(this.$route.params.id);
  },
};
</script>


