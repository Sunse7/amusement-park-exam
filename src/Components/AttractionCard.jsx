import style from "./AttractionCard.module.scss";

function AttractionCard({ title, infoText, src, alt, isReversed }) {
  return (
    <section className={style.card}>
      {isReversed ? (
        <>
          <img src={src} alt={alt} />
          <section className={style.textBox}>
            <h3>{title}</h3>
            <p>{infoText}</p>
          </section>
        </>
      ) : (
        <>
          <section className={style.textBox}>
            <h3>{title}</h3>
            <p>{infoText}</p>
          </section>
          <img src={src} alt={alt} />
        </>
      )}
    </section>
  );
}

export default AttractionCard;
