// Le localStorage est une API du navigateur qui permet de stocker des données sous forme de clé-valeur de manière persistante, même après la fermeture du navigateur.


const setItem = (id, value) => localStorage.setItem(id, JSON.stringify(value))

const getItem = (id) => JSON.parse(localStorage.getItem(id))

const getItems = () => Object.keys(localStorage).map(getItem)

const removeItem = (id) => localStorage.removeItem(id)

export {setItem, getItem, getItems, removeItem}
