import {useState} from "react";

export function useLogin() {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
    disabled: true,
  })

  function handleFormChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value,
        disabled: (data.username && data.password) === '' ? true : false,
      }
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setData({
      ...data,
    })
    console.log(data)
  }

  function handleFormReset(event) {
    event.preventDefault();
    setData((data) => {
      return {
        username: '',
        password: '',
        remember: false,
        disabled: true,
      }
    })
  }

  function handleFormPrefill(event) {
    event.preventDefault();
    setData((data) => {
      return {
        username: 'Filippo',
        password: 'Hello123',
        remember: true,
        disabled: false,
      }
    })
  }

  return {
    username: data.username,
    password: data.password,
    remember: data.remember,
    disabled: data.disabled,
    input: handleFormChange,
    submit: handleFormSubmit,
    reset: handleFormReset,
    prefill: handleFormPrefill,
  }
}