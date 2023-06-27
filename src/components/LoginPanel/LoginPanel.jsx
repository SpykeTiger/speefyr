import styles from './LoginPanel.scss';
import { Link } from 'react-router-dom';

export function LoginPanel() {
    return(
        <div id='loginpanel'>
            <div className='loginpanel'>
                <div className='container'>
                    <h2>Speefyr</h2>
                    <input type="text" placeholder="Usuário"></input>
                    <input type="password" placeholder="Senha"></input>
                    <button type="submit" onClick={<Link to='/Home'></Link>}>Entrar</button>
                </div>  
            </div>
        </div>
    )
}