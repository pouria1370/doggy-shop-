
export const setDropdownItem = (item, saveToArray) => {
  const itemFinded = saveToArray.find((itemDog) => itemDog.id == item.id);
console.log("hello");
  if (itemFinded) {
    return saveToArray.map((iteminDogs) =>
      iteminDogs.id === item.id
        ? { ...iteminDogs, quantity: iteminDogs.quantity + 1 }
        : iteminDogs
    );
  }
  else return [...saveToArray,{...item,quantity:1}] 
};
