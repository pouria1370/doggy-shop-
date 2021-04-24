export const setDropdownItem = (item, saveToArray) => {
  const itemFinded = saveToArray.find((itemDog) => itemDog.id == item.id);
  if (itemFinded) {
    return saveToArray.map((iteminDogs) =>
      iteminDogs.id === item.id
        ? { ...iteminDogs, quantity: iteminDogs.quantity + 1 }
        : iteminDogs
    );
  } else return [...saveToArray, { ...item, quantity: 1 }];
};

export const quantityAccumulator = (array) => {
  array.reduce((accumulator, item) => accumulator + item.quantity, 1);
  console.log(
    array.reduce((accumulator, item) => accumulator + item.quantity, 0)
  );
};
export const removeDropdownItem = (item, array) => {
  return array.filter((iteminDogs) => iteminDogs.id !== item.id);
};
export const reduceDropdownItem = (item, array) => {
  const finedItem = array.find((itemsInDogs) => itemsInDogs.id === item.id);
  if (finedItem.quantity > 1) {
    return array.map((iteminDogs) =>
      iteminDogs.id === item.id
        ? { ...iteminDogs, quantity: iteminDogs.quantity - 1 }
        : iteminDogs
    );
  } else return array.filter((iteminDogs) => iteminDogs.id !== item.id);
};
export const addDropdownItem = (item, array) => {
  return array.map((iteminDogs) =>
    iteminDogs.id === item.id
      ? { ...iteminDogs, quantity: iteminDogs.quantity + 1 }
      : iteminDogs
  );
};
