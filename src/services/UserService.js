export default class UserService {
  registerUser(username, email, password, address) {
    /*API call here, E.g.: const resp = axios.post(`${this.baseURL}/registration`, {
            username:username,
            email:email,
            password:password,
            address:address
        });
        */
    const resp = { data: { validated: true } };
    return resp.data.validated;
  }
}
