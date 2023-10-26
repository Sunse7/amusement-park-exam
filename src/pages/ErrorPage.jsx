import Header from "../Components/Header";
import style from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <h2 className={style.header}>Oh no! The page you are looking for is lost in space...</h2>
        <img className={style.spaceship} src="./images/rocket-spaceship.png" alt="A rocket spaceship" />
      </main>
    </>
  );
}

export default ErrorPage;
