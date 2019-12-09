import * as Yup from 'yup'

export const items = {}
export const validSchemas = {}
export const initValues = {}

const fieldBlockSchema = [
    {
        type: 'text',
        yup: Yup.string(),
        value: '',
        fixed: false,
    },
    {
        type: 'number',
        yup: Yup.number(),
        value: 0,
        fixed: false,
    },
    {
        type: 'textarea',
        yup: Yup.string(),
        value: '',
        fixed: false,
    },
    {
        type: 'select',
        options: ['', 'first', 'second', 'third'],
        yup: Yup.string().oneOf(['first', 'second', 'third']),
        value: '',
        fixed: true,
    },
]

for (let idx = 1; idx <= 500; idx++) {
    const fieldSchema = fieldBlockSchema[idx % fieldBlockSchema.length]
    const fieldId = fieldSchema.type + '-' + idx
    items[fieldId] = {
        ...fieldSchema,
        id: fieldSchema.fixed ? fieldSchema.type : fieldId
    }
    validSchemas[items[fieldId].id] = fieldSchema.yup
    initValues[items[fieldId].id] = fieldSchema.value
}
