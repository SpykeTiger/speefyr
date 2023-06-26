import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';

import styles from './LoginPanel.scss';
export function LoginPanel() {
    return(
        <>
            <div className='LoginPanel'>
                <div className='Item'>
                    <Input />
                </div>
                <div className='Item'>
                    <Input />
                </div>
                <div className='Item'>
                    <Button />
                </div>
            </div>  
        </>
    )
}