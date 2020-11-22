<template>
  <div class="container text-center my-4">
    <h3>Global State Composition API</h3>
    <hr />
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: { Counter }
}
</script>
