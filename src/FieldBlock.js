import React, { useState, useCallback } from 'react'
import { FastField, ErrorMessage, connect } from 'formik'

const InputField = (props) => {
    const { field, form, item } = props
    const { id } = item
    const isInvalid = form.errors[field.name] && form.touched[field.name]

    const inputParams = useCallback(() => {
        return {
            className: 'text-input' + isInvalid && "error"
        }
    }, [isInvalid])

    switch (props.item.type) {
        case 'number':
            return <input type="number" {...field} {...inputParams} />
        case 'text':
            return <input type="text" {...field} {...inputParams} />
        case 'textarea':
            return <textarea {...field} {...inputParams} />
        case 'select':
            return <select {...field} {...inputParams}>
                {item.options.map((option, idx) => <option key={id + '-option-' + idx}>{option}</option>)}
            </select>
        default:
            return <></>
    }
}

const FieldBlock = (props) => {
    const { item } = props
    const id = item.fixed ? item.type : item.id
    const [rendered, setRendered] = useState(0)

    return (
        <React.Fragment>
            <label htmlFor={id}>{id.split('-').reverse().join(' ')}</label>
            <FastField name={id}>
                {({ field, form }) => {
                    return (
                        <>
                            <InputField item={item} field={field} form={form} />
                            <ErrorMessage name={id} component="div" className="input-feedback" />
                            {process.env.NODE_ENV === 'development' && <div style={{ color: '#bbb' }}>Re-Rendered: {setRendered(rendered + 1)}{rendered}</div>}
                        </>
                    )
                }}
            </FastField>
        </React.Fragment>
    )
}

export default connect(FieldBlock)
