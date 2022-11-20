export function maskString(value: string, pattern: string) {
  let i = 0;
  const v = value.toString();
  return pattern.replace(/#/g, () => v[i++]);
}
