import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { hugeFormRef } from './Api'
import FieldBlock from './FieldBlock'
import { initValues, items, validSchemas } from './fieldSchema'

const App = () => {
    const [initialValues, setInitialValues] = useState(initValues)
    useEffect(() => {
        (async () => {
            const result = await hugeFormRef.once('value')
            setInitialValues(result.val())
        })()
    }, [])

    return (
        <div className="app">
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    try {
                        await hugeFormRef.set(values)
                        setInitialValues(values)
                    } catch (err) {
                        console.error(err)
                    }
                    actions.setSubmitting(false)
                }}
                validationSchema={Yup.object().shape(validSchemas)}
                enableReinitialize={true}
            >
                {({ dirty, isSubmitting, handleSubmit, handleReset }) => (
                    <form onSubmit={handleSubmit}>
                        {Object.keys(items).map((key, idx) => <FieldBlock key={'group-' + idx} item={items[key]} />)}
                        <footer>
                            <button
                                type="button" className="outline"
                                disabled={!dirty || isSubmitting}
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </footer>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default App
