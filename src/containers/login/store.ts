import Swal from 'sweetalert2';
import { observable, action } from 'mobx';
import { assign } from '../../utils/object.util';
import { setAuth } from '../../utils/auth.util';

export default class LoginStore {
  @observable email: string = '';
  @observable password: string = '';

  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    assign(this, name, value);
  };

  @action handleSubmit = () => {

    const credentials = {
      email: 'rhm.novo@gmail.com',
      password: 'salada'
    };

    if (this.email !== credentials.email || this.password !== credentials.password) {
      Swal.fire('Usuário/Senha Incorreto', '', 'error');
      return false;
    }

    const data = {
      email: credentials.email,
      name: 'Rafael Morais'
    };

    setAuth(JSON.stringify(data));

    return true;
  };

}
const login = new LoginStore();
export { login };