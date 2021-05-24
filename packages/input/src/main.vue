<template>
  <div 
    :class="
      [
        textArea ? 'p-textArea' : 'p-input',
        readonly ? 'p-input-readonly' : '',
        disabled ? 'p-input-disabled' : ''
      ]
    "
  >
    <!-- 没有auto高度并且是input -->
    <template v-if="!autoSize && !textArea">
      <input type="text" :value="value" @input="input" :readonly="readonly" :disabled="disabled" :placeholder="placeholder">
    </template>
    <!-- 自动高度都是textarea实现 -->
    <template v-else>
      <textarea :rows="[textArea ? 3 : 1]" @input="inputOfTextarea"  :readonly="readonly" :disabled="disabled" :placeholder="placeholder"></textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    textArea: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    autoSize: Boolean
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)
    },
    inputOfTextarea (e) {
      if (this.autoSize) {
        const { target } = e
        // 更新前刷新一次高度的值
        target.style.height = 'auto'
        // 每次都拿实时的，就可以更新
        target.style.height = `${target.scrollHeight - 4}px`
      }
      this.$emit('input', e.target.value)
    }
  }
}
</script>
