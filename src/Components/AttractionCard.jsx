import { forwardRef } from "react";
import style from "./AttractionCard.module.scss";

const AttractionCard = forwardRef(({ title, infoText, src, alt, isReversed }, ref)  => {
  return (
    <section ref={ref} className={style.card}>
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
});

export default AttractionCard;
