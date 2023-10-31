import style from './MyCalendar.module.scss';

function Calendar({onDateChange}) {
    return ( 
        <>
            <input type="date" className={style.date} onChange={(e) => onDateChange(e.target.value)}></input>
        </>
     );
}

export default Calendar;