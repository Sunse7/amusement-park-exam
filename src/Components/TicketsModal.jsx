import MyCalendar from "./MyCalendar";
import ConfirmButton from "./ConfirmButton";
import style from "./TicketsModal.module.scss";
import { motion } from "framer-motion";
import TicketAmount from "./TicketAmount";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function TicketsModal() {
  const [amount, setAmount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const MotionConfirmButton = motion(ConfirmButton);
  const darkGrey = "#1f1e1e";

  function onBuyTicket() {
    setIsVisible(true);
  }

  return (
    <section className={style.modal}>
      <p>Buy your tickets here</p>
      <section>
        <MyCalendar />
        <TicketAmount
          onMinusClick={() => setAmount(amount - 1)}
          onPlusClick={() => setAmount(amount + 1)}
          amount={amount}
        />
        <MotionConfirmButton
          onClick={onBuyTicket}
          whileTap={{ scale: 0.9 }}
          whileHover={{ color: darkGrey }}
        />
        {isVisible && <ConfirmModal numTickets={amount} />}
      </section>
    </section>
  );
}

export default TicketsModal;
