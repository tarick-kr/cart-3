export default {
  state: {
    selectFields: [
      {
        idSelectField: 'field-type1',
        type: 'Type1',
        name: 'Вес',
        sym: 'w',
        unit: 'кг',
        arraySelectItems: ['0.5', '1', '1,5', '1.7', '2']
      },
      {
        idSelectField: 'field-type2',
        type: 'Type2',
        name: 'Материал',
        arraySelectItems: ['Оц. сталь', 'Нерж. сталь', 'Пластик']
      },
      {
        idSelectField: 'field-type3',
        type: 'Type3',
        name: 'Цвет',
        arraySelectItems: ['Красный', 'Синий', 'Зелёный', 'Белый', 'Чёрный']
      },
      {
        idSelectField: 'field-type4',
        type: 'Type4',
        name: 'Цвет',
        arraySelectItems: ['Пурпурный', 'Берюзовый', 'Неоновый', 'Малиновый']
      }
    ]
  },
  getters: {
    getSelectFieldByType: (state) => {
      return SelectFieldByType => {
        return (
          state.selectFields.find(selectField => selectField.type === SelectFieldByType)
        )
      }
    }
  }
}
