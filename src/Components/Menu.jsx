import HamburgerIcon from './HamburgerIcon';
import style from './Menu.module.scss';
import CrossIcon from './CrossIcon';
import { AnimatePresence, motion } from 'framer-motion';

//TODO close on scroll


function Menu({ onClick, isOpen }) {

  const menuVars = {
    init: { scaleY: 0 },
    animate: { scaleY: 1, transition: {
      duration: .5,
      delayChildren: .5,
      staggerChildren: .2
    }},
    exit: {
      scaleY: 0,
      transition: {
        duration: .5
      }
    }
  }

  return (
    <motion.nav className={style.navbar}>
      <button onClick={onClick}>
        {isOpen ? <CrossIcon /> : <HamburgerIcon />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            variants={menuVars}
            initial='init'
            animate='animate'
            exit='exit'
            className={style.openMenu}
          >
            <motion.a variants={menuVars} href="/">Home</motion.a>
            <motion.a variants={menuVars} href="/attractions">Attractions</motion.a>
            <motion.a variants={menuVars} href="/">Tickets</motion.a>
            <motion.a variants={menuVars} href="/">About us</motion.a>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Menu;
