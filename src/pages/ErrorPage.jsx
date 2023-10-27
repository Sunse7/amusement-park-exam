import { motion } from "framer-motion";
import Header from "../Components/Header";
import Star from "../Components/Star";
import style from "./ErrorPage.module.scss";

const MotionStar = motion(Star);

function ErrorPage() {
  const durations = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (15 - 5 + 1) + 5)
  );

  //TODO fix so that all dont fall att once in a line

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
              initial={{ y: -250 }}
              animate={{ y: 630 }}
              transition={{ duration: duration, repeat: Infinity }}
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
