import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';

import styles from './LoginPanel.scss';
export function LoginPanel() {
    return(
        <div className='container'>
            <h2>Speefyr</h2>
            <input type="text" placeholder="Usuário"></input>
            <input type="password" placeholder="Senha"></input>
            <button type="submit">Entrar</button>
        </div>  
       
    )
}