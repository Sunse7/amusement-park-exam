import style from './MyCalendar.module.scss';

function Calendar() {
    return ( 
        <>
            <input type="date" className={style.date}></input>
        </>
     );
}

export default Calendar;