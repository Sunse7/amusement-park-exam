import MyCalendar from "./MyCalendar";
import ConfirmButton from "./ConfirmButton";
import style from "./TicketsModal.module.scss";
import { AnimatePresence } from "framer-motion";
import TicketAmount from "./TicketAmount";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function TicketsModal() {
  const [amount, setAmount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState('');

  function onBuyTicket() {
    setIsVisible(true);
  }

  function handleDateChange(selectedDate) {
    setDate(selectedDate);
  }

  return (
    <section className={style.modal}>
      <p>Buy your tickets here</p>
      <section>
        <MyCalendar onDateChange={handleDateChange} />
        <TicketAmount
          onMinusClick={() => setAmount(amount - 1)}
          onPlusClick={() => setAmount(amount + 1)}
          amount={amount}
        />
        <ConfirmButton
          onClick={onBuyTicket}
        />
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
          {isVisible && (
            <ConfirmModal
              numTickets={amount}
              chosenDate={date}
              isVisible={isVisible}
              handleClose={() => setIsVisible(false)}
            />
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}

export default TicketsModal;
