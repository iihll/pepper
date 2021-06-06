<template>
  <div class="p-link">
    <span 
      :class="
      [
        type ? `p-link-${type}` : '',
        disabled ? `p-link-disabled` : '',
        underline ? `p-link-underline` : '',
      ]"
      @click="handlerClick"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PLink',
  props: {
    type: {
      type: String,
      default: '',
      validator: val => ['yellow', 'green', 'red', 'blue', 'gray', 'pepper'].includes(val)
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: 'blank',
      validator: val => ['blank', 'self'].includes(val)
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  methods: {
    handlerClick () {
      if (!this.href) return
      // 新打开页面
      if (this.target === 'blank') {
        window.open(this.href, '_blank')
      } else {
        this.$router.push(this.href)
      }
    }
  }
}
</script>
