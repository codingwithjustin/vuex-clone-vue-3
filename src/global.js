import { reactive, computed } from 'vue'

// State
const state = reactive({
  count: 1
})

// Getters
const times2 = computed(() => state.count * 2)

// Mutation
const inc = amount => (state.count += amount)

export default { state, inc, times2 }
