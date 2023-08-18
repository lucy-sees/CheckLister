export const add = (val, arr) => {
  arr.push({
    description: val,
    completed: false,
    index: arr.length + 1,
  });
};

export const remove = (index, arr) => {
  arr.splice(index, 1);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};

export const reorder = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};