<template>
  <div >
    <div class="navbar">
      <div class="container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" class="item">
            <i class="list icon"></i>Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus icon"></i>New
          </router-link>
         <router-link to="/about" class="item">
            <i class="question circle outline icon"></i>About
          </router-link>
          <a href="https://github.com/vduy1210" class="item">
             Me
          </a>
        </div>
      </div>
    </div>

    <div class="ui  container ">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view />
          </div>
          <div class="four wide column">
            <flash-message></flash-message>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '/src/styles.css'
export default {
  name: 'App'
}
</script>
