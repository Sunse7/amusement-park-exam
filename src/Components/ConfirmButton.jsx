import { forwardRef } from 'react';
import style from './ConfirmButton.module.scss';

const ConfirmButton = forwardRef(({onClick}, ref) => {
    return ( 
        <button ref={ref} onClick={onClick} className={style.confirmButton}>Buy tickets</button>
     );
});

export default ConfirmButton;