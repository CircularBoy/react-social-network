export const required = value => {
  if(!value) return 'Field is required'
  return undefined
}

export const maxSize = (size) => value => {
  if(value.length > size) return `Max length ${size}`
}