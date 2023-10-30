import HamburgerIcon from "./HamburgerIcon";
import style from "./Menu.module.scss";
import CrossIcon from "./CrossIcon";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//TODO close on scroll, change navlink to a

function Menu({ onClick, isOpen }) {
  return (
    <motion.nav className={style.navbar}>
      <button onClick={onClick}>
        {isOpen ? <CrossIcon /> : <HamburgerIcon />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ scaleY: 0 }}
            className={style.openMenu}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/attractions">Attractions</NavLink>
            <NavLink to="/">Tickets</NavLink>
            <NavLink to="/">About us</NavLink>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Menu;
