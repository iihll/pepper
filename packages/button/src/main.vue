<template>
  <div 
    class="p-button"
    :class="
      [
        type ? `p-button-${type}` : '',
        size ? `p-button-${size}` : '',
        disabled ? `p-button-disabled` : '',
        circle ? `p-button-circle` : '',
        text ? `p-button-text` : ''
      ]
    "
  >
    <button @click="handlyClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    type: {
      type: String,
      default: '',
      validator: val => ['yellow', 'green', 'red', 'blue', 'gray', 'pepper'].includes(val)
    },
    size: {
      type: String,
      default: 'm',
      validator: val => ['s', 'm', 'l'].includes(val)
    },
    disabled: Boolean,
    circle: Boolean,
    text: Boolean
  },
  methods: {
    handlyClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
