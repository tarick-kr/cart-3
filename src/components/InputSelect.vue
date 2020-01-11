<template>
  <v-select
    :label="this.label"
    :value="this.data.value"
    required
    :items="this.changeSelectField.arraySelectItems"
    @input="onChangeValue($event)"
  />
</template>

<script>
export default {
  name: 'InputSelect',
  data () {
    return {
      label: ''
    }
  },
  props: {
    data: {
      type: [Object, Number],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
    selectType: {
      type: [Number],
      required: true
    }
  },
  mounted () {
    this.label = this.data.sym ? this.data.name + ' ' + this.data.sym + ', ' + this.data.unit : this.data.name
  },
  methods: {
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        newValue: e
      })
    }
  },
  computed: {
    changeSelectField () {
      const type = this.data.type
      return this.$store.getters.getSelectFieldByType(type)
    }
  }
}
</script>

<style scoped>

</style>
