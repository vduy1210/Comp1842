<template>
  <div>
    <table class="words-table">
      <thead>
        <tr>
          <th colspan="5">Show all words</th>
        </tr>
        <tr>
          <th>Vietnamese</th>
          <th>English</th>
          <th colspan="2">Menu</th>
          <th>
              <a class="words-table__delete-all" @click.prevent="onDeleteAll()">
              Delete All </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, i) in words" :key="i">
          <td>{{ word.vietnamese }}</td>
          <td>{{ word.english }}</td>
          <td> 
              <router-link
              class="words-table__show"
              :to="{ name: 'Show', params: { id: word._id } }"
            >
              Show
            </router-link>
          </td>
          <td>
              <router-link
              class="words-table__edit"
              :to="{ name: 'Edit', params: { id: word._id } }"
            >
              Edit
            </router-link>
          </td>
          <td>
               <a class="words-table__delete" @click.prevent="onDelete(word._id)">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '/src/styles.css'
import { ViewAllVocabs, DeleteVocab, DeleteAllVocabs } from '../helpers/api.js'

export default {
   name: "Words",
   data() {
      return {
         words: [],
      };
   },
   async mounted() {
      this.words = await ViewAllVocabs();
   },
   methods: {
    async onDelete(id) {
      const deleteConfirm = window.confirm("Are you sure to delete this word ?");
      if (deleteConfirm) {
        await DeleteVocab(id);
        const updatedWords = this.words.filter((word) => word._id !== id);
        this.words = updatedWords;
        this.flash("Delete word succeed !");
      }
    },
    async onDeleteAll() {
      const deleteConfirm = window.confirm("Are you sure to delete all words ?");
      if (deleteConfirm) {
        await DeleteAllVocabs();
        this.words = [];
        this.flash("Delete all word succeed !");
      }
    },
  },
}
</script>


