

export function useRefValue(init: string) {
  const value = ref(init);

  function setValue(newValue: string) {
    value.value = newValue
  }

  return {
    value,
    setValue
  }
}