export const saveToLocal = (arr) => {
  localStorage.setItem('myList', JSON.stringify(arr));
};

export const reorder = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  saveToLocal(arr);
};

export const addToArr = (val, arr) => {
  arr.push({
    description: val,
    completed: false,
    index: arr.length + 1,
  });
  reorder(arr);
};

export const appendList = (i, arr) => {
  const li = document.createElement('li');
  li.className = 'todo-li-elements';

  const ul = document.querySelector('.list-container');
  ul.append(li);

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.className = 'checkbox';

  const txt = document.createElement('input');
  txt.type = 'text';
  txt.className = 'text-box';
  txt.readOnly = true;
  txt.value += arr[i - 1].description;

  const del = document.createElement('i');
  del.className = 'fa-solid fa-trash-can fa-xs';

  const edt = document.createElement('i');
  edt.className = 'fa-regular fa-pen-to-square fa-xs';

  const sav = document.createElement('i');
  sav.className = 'fa-regular fa-floppy-disk fa-xs';
  sav.style.display = 'none';

  li.append(check, txt, del, edt, sav);
};

export const removeFromArr = (index, arr) => {
  arr.splice(index - 1, 1);
  // reorder(arr);
};

export const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  // saveToLocal(arr);
  localStorage.setItem('myList', JSON.stringify(arr));
};