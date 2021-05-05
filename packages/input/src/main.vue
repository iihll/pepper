<template>
  <div 
    class="p-input"
    :class="
      [ 
        `p-input-${size}`,
        disabled ? 'p-input-disabled' : '',
        autoHeight ? 'p-input-autoHeight' : ''
      ]
    "
  >
    <input type="text" ref="input" v-if="!textarea" :value="value" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" @input="handleInput" @change="handleChange">
    <textarea name="" ref="textarea" v-else :value="value" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" @input="handleInput" id="" cols="30" :rows="rows" @change="handleChange"></textarea>
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
    size: {
      type: String,
      default: 'm',
      validator: (val) => ['s', 'm', 'l'].includes(val)
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: [Number, String],
      default: 3
    },
    readonly: Boolean,
    disabled: Boolean,
    textarea: Boolean,
    autoHeight: Boolean
  },
  data () {
    return {
      scrollHeight: 0
    }
  },
  mounted () {
    if (this.textarea) {
      this.scrollHeight = this.$refs.textarea.scrollHeight
    }
  },
  methods: {
    handleInput (e) {
      console.log('value', e.target.minHeight);
      const hiddenTextarea = e.target
      // 是 textarea 元素，并且开启了自适应高度。
      if (this.textarea && this.autoHeight) {
        e.target.style.height = "inherit";
        this.scrollHeight = e.target.scrollHeight
        e.target.style.height = `${this.scrollHeight - 4}px`;
        // hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
        // hiddenTextarea = null;
      }
      this.$emit('input', e.target.value)
    },
    handleChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>
