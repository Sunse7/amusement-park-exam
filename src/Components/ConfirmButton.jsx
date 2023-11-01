import style from './ConfirmButton.module.scss';
import { motion } from 'framer-motion';

function ConfirmButton({onClick}) {
    const darkGrey = "#1f1e1e";
    
    return ( 
        <motion.button whileTap={{ scale: 0.9 }}
        whileHover={{ color: darkGrey }} onClick={onClick} className={style.confirmButton}>Buy tickets</motion.button>
     );
};

export default ConfirmButton;