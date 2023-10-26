import { forwardRef } from 'react';
import style from './Star.module.scss';

const Star = forwardRef((props, ref) => {
    return ( 
        <div ref={ref} className={style.star}></div>
     );
});

export default Star;