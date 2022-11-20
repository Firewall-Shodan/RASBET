export const selectDataFormatter = (
  data: any[],
  label: string,
  value: string
) => {
  return data.map((item) => ({
    label: item[label],
    value: item[value],
  }));
};
