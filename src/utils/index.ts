export function convertNumber(result: number) {
  return new Intl.NumberFormat("US").format(result);
}
