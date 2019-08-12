import store from 'store'
const USR_KEY = 'user_key'
export default {
    /* 
    save user
    */
    saveUser(user) {
    //   localStorage.setItem(USR_KEY, JSON.stringify(user))  
    store.set(USR_KEY, user)
   },

   getUser() {
    //    return JSON.parse(localStorage.getItem(USR_KEY) || '{}')
    return store.get(USR_KEY) || {}
   },

   removeUser() {
    //    localStorage.removeItem(USR_KEY)
    store.remove(USR_KEY)
   }
}