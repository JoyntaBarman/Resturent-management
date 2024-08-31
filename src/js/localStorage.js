const getLocalStorage = (name) => {
  const localItem = localStorage.getItem(name);
  return JSON.parse(localItem);
}

const setLocalStorage = (name, value) => {
  const previousItems = getLocalStorage(name);

  if(previousItems) {

    const newItems = [...previousItems, value];
    localStorage.clear();
    localStorage.setItem(name, JSON.stringify(newItems));
  } else {
    localStorage.setItem(name, JSON.stringify([value]))
  }

}

export {getLocalStorage, setLocalStorage};