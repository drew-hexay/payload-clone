'use client'

import { useCallback, useEffect, useState } from 'react'
import useDebounce from '@utilities/use-debounce'
import { useFormProcessing, useFormSubmitted, useFormModified, useForm } from '../Form/context'
import { Value, Action } from '../types'
import { FormField, SetValue } from './types'

// this hook:
// 1. reports that the form has been modified
// 2. debounces its value and sends it to the form context
// 3. runs field-level validation
// 4. returns form state and field-level errors

export const useFormField = <T extends Value>(options): FormField<T> => {
  const { path, validate } = options

  const formContext = useForm()
  const submitted = useFormSubmitted()
  const processing = useFormProcessing()
  const modified = useFormModified()

  const { dispatchFields, getField, setIsModified } = formContext

  // Get field by path
  const field = getField(path)

  const fieldExists = Boolean(field)

  const initialValue = field?.initialValue

  const [internalValue, setInternalValue] = useState<Value>()

  // Debounce internal values to update form state only every 60ms
  const debouncedValue = useDebounce(internalValue, 120)

  // Valid could be a string equal to an error message
  const valid = field && typeof field.valid === 'boolean' ? field.valid : true
  const showError = valid === false && submitted

  // Method to send update field values from field component(s)
  // Should only be used internally
  const sendField = useCallback(
    async (valueToSend: Value) => {
      const fieldToDispatch: Action = {
        type: 'UPDATE',
        path,
        value: valueToSend,
        valid: true,
      }

      const validationResult =
        typeof validate === 'function'
          ? await validate(valueToSend, {
              // TODO: send options through validate heres
            })
          : true

      if (typeof validationResult === 'string') {
        fieldToDispatch.errorMessage = validationResult
        fieldToDispatch.valid = false
      }

      fieldToDispatch.initialValue = initialValue

      dispatchFields(fieldToDispatch)
    },
    [path, dispatchFields, validate, initialValue],
  )

  // NOTE: 'internalValue' is NOT debounced
  const setValue = useCallback<SetValue>(
    val => {
      if (!modified) {
        setIsModified(true)
      }

      setInternalValue(val)
    },
    [setIsModified, modified],
  )

  useEffect(() => {
    if (initialValue !== undefined) {
      setInternalValue(initialValue)
    }
  }, [initialValue])

  useEffect(() => {
    if (debouncedValue !== undefined || !fieldExists) {
      sendField(debouncedValue)
    }
  }, [debouncedValue, sendField, fieldExists])

  useEffect(
    () => () => {
      dispatchFields({
        type: 'REMOVE',
        path,
      })
    },
    [dispatchFields, path],
  )

  return {
    ...options,
    showError,
    errorMessage: field?.errorMessage,
    value: internalValue,
    formSubmitted: submitted,
    formProcessing: processing,
    setValue,
  }
}
