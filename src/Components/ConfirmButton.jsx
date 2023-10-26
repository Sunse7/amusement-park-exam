import { forwardRef } from 'react';
import style from './ConfirmButton.module.scss';

const ConfirmButton = forwardRef((props, ref) => {
    return ( 
        <button ref={ref} className={style.confirmButton}>Buy tickets</button>
     );
});

export default ConfirmButton;