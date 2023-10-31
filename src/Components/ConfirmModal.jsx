import ConfirmButton from './ConfirmButton';
import style from './ConfirmModal.module.scss';

function ConfirmModal({numTickets}) {
    return ( 
        <section className={style.wrapper}>
            <p>Num of tickets: {numTickets}</p>
            <ConfirmButton />
        </section>
     );
}

export default ConfirmModal;