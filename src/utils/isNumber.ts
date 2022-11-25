const a = 1

a + 'an'

export const isNumber = (n: any) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
