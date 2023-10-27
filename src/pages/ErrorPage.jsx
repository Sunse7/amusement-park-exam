import { motion } from "framer-motion";
import Header from "../Components/Header";
import Star from "../Components/Star";
import style from "./ErrorPage.module.scss";

const MotionStar = motion(Star);

function ErrorPage() {
  const durations = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (15 - 5 + 1) + 5)
  );

  const starPositions = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * (-250 - (-400) + 1)) - 400
);

  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <h2 className={style.header}>
          Oh no! The page you are looking for is lost in space...
        </h2>
        <section className={style.starsContainer}>
          {durations.map((duration, i) => (
            <MotionStar
              key={i}
              initial={{ y: starPositions[i] }}
              animate={{ y: 630 }}
              transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
            />
          ))}
        </section>
        <img
          className={style.spaceship}
          src="./images/rocket-spaceship.png"
          alt="A rocket spaceship"
        />
      </main>
    </>
  );
}

export default ErrorPage;
