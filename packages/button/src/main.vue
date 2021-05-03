<template>
  <div 
    class="p-button"
    :class="
      [
        `p-button-${type}`,
        `p-button-${size}`,
        circle ? 'p-button-circle' : '',
        block ? 'p-button-block' : '',
        disabled ? 'p-button-disabled' : '',
        loading ? 'p-button-loading' : ''
      ]
    "
    @click="onButtonClick"
    >
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    type: {
      type: String,
      default: 'purple',
      validator: (val) => ['yellow', 'green', 'red', 'blue', 'purple'].includes(val)
    },
    size: {
      type: String,
      default: 'm',
      validator: (val) => ['s', 'm', 'l'].includes(val)
    },
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    onButtonClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
