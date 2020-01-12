<template>
  <v-text-field
    :label="this.label"
    :hint="this.hint"
    persistent-hint
    required
    :value="this.data"
    @input="onChangeValue($event)"
    :error="!validValue"
  />
</template>

<script>
export default {
  name: 'InputQuantity',
  data () {
    return {
      label: '',
      hint: '',
      maxQuantity: 100,
      patternValidQuantity: /^(?:[1-9]\d*|\d)$/,
      hintDiv: ''
    }
  },
  props: {
    data: {
      type: [Object, Number],
      required: true
    }
  },
  mounted () {
    this.label = 'Колличество, шт'
    this.hint = 'максимум ' + this.maxQuantity + ' шт'
    this.hintDiv = this.$el.getElementsByClassName('v-messages theme--light')[0]
  },
  methods: {
    onChangeValue (e) {
      this.$emit('onUpdate', {
        newValue: e,
        valid: this.patternValidQuantity.test(String(e)) && String(e) > 0 && String(e) <= this.maxQuantity
      })
    }
  },
  computed: {
    validValue () {
      if (this.patternValidQuantity.test(String(this.data)) && String(this.data) > 0 && String(this.data) <= this.maxQuantity) {
        if (this.hintDiv !== '') {
          this.hintDiv.classList.remove('error--text')
        }
        return true
      } else {
        this.hintDiv.classList.add('error--text')
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
