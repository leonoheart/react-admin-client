import ajax from './ajax'
//login request
/* export function reqLogin(username, password) {
    return ajax('/login', {username, password}, 'POST')
} */

const BASE = ''

export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

//add User
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')