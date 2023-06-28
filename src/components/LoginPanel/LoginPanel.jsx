import styles from './LoginPanel.scss';

import { useNavigate } from 'react-router-dom';


export function LoginPanel() {
    
    const navigate = useNavigate();

    const redirecionarParaOutraRota = () => {
        navigate("/Home")
    };
    return(
        
        <div id='loginpanel'>
            <div className='loginpanel'>
                <div className='container'>
                    <h2>Speefyr</h2>
                    <input type="text" placeholder="Usuário"></input>
                    <input type="password" placeholder="Senha"></input>
                    <button type="submit" onClick={redirecionarParaOutraRota} >Entrar</button>
                </div>  
            </div>
        </div>
    )
}