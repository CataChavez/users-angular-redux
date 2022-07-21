import { BASE } from "src/environments/environment";

export const apiRequest = {
    getUserList: BASE.bff + 'users?per_page=10&delay=4', // GET
    getUserById: BASE.bff +  'users/', //GET se debe enviar la id
    createUser: BASE.bff + 'users', // POST
    deleteUser: BASE.bff + 'users/:id', // DELETE
    register: BASE.bff + 'register', // POST
    login: BASE.bff + 'login', // POST
    updateUser: BASE.bff + 'users/:id', // PUT

}