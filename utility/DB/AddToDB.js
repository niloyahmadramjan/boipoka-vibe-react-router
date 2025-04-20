/**
 * 1 store with id
 * 2 where to store
 * 3 array or collection
 * 4 if book already exist the show a alert
 * 5 if book not exist then pus in the collection of array
 */

const getItemlocalStorageSTR = () => {
  const booksData = localStorage.getItem("readBooks");

  if (booksData) {
    return JSON.parse(booksData);
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const booksData = getItemlocalStorageSTR();

  if (booksData.includes(id)) {
    alert("This books already exist!");
  } else {
    booksData.push(id);
    const data = JSON.stringify(booksData);
    localStorage.setItem("readBooks", data);
    alert("Book added successfull!");
  }
};

export { addToLocalStorage,getItemlocalStorageSTR as storeDB };
