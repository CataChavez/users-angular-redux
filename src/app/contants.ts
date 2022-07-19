import { BASE } from "src/environments/environment";

export const apiRequest = {
    getUserList: BASE.bff + 'users', // GET
    getUserById: BASE.bff +  'users/:id', //GET
    createUser: BASE.bff + 'users', // POST
    deleteUser: BASE.bff + 'users/:id', // DELETE
    register: BASE.bff + 'register', // POST
    login: BASE.bff + 'login', // POST
    updateUser: BASE.bff + 'users/:id', // PUT

}