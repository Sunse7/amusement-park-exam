import MyCalendar from './MyCalendar';
import ConfirmButton from './ConfirmButton';
import style from './TicketsModal.module.scss';
import { motion } from 'framer-motion';

function TicketsModal() {

  const MotionConfirmButton = motion(ConfirmButton);
  const darkGrey = '#1f1e1e';

  return (
    <section className={style.modal}>
      <p>Buy your tickets here</p>
      <section>
        
        <MotionConfirmButton whileTap={{ scale: 0.9 }} whileHover={{ color: darkGrey }} />
      </section>
    </section>
  );
}

export default TicketsModal;
