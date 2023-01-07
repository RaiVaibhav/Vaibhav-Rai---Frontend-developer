export function capitalizeFirstLetter(str: string) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function timeToDateString(val: string) {
  if (!val) {
    return val;
  }
  const date = new Date(val);
  return date.toDateString();
}
export function filteredData(data: any[], key: string) {
  const set = new Set();

  return data.filter((i) => {
    const val = i[key];
    if (!val) {
      return false;
    }
    if (!set.has(val)) {
      set.add(val);
      return true;
    }
    return false;
  });
}
