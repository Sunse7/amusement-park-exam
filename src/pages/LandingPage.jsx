import Header from '../Components/Header';
import TicketsModal from '../Components/TicketsModal';
import style from './LandingPage.module.scss';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <div className={style.image}>
          <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 2.5 }}}>Welcom to Alheimur<br/> The best amusement park in the galaxy!</motion.h2>
        </div>
        <TicketsModal />
      </main>
    </>
  );
}

export default LandingPage;
