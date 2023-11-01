import ConfirmButton from "./ConfirmButton";
import style from "./ConfirmModal.module.scss";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CrossIcon from "./CrossIcon";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function ConfirmModal({ numTickets, handleClose, chosenDate }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.section
        className={style.wrapper}
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={style.closeButton}
          onClick={handleClose}
        >
          <CrossIcon />
        </motion.button>
        <section className={style.textBox}>
          <section className={style.ticketBox}>
            <p>Number of tickets: </p>
            <p>{numTickets}</p>
          </section>
          <section className={style.dateBox}>
            <p>Date: </p>
            <p>{chosenDate}</p>
          </section>
        </section>
        <ConfirmButton />
      </motion.section>
    </Backdrop>
  );
}

export default ConfirmModal;
