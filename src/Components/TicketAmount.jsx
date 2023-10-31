import style from './TicketAmount.module.scss';

function TicketAmount({amount, onMinusClick, onPlusClick}) {
  return (
    <section className={style.wrapper}>
      <button onClick={onMinusClick}>-</button>
      <p>{amount}</p>
      <button onClick={onPlusClick}>+</button>
    </section>
  );
}

export default TicketAmount;
