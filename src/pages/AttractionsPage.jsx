import AttractionCard from "../Components/AttractionCard";
import Header from "../Components/Header";
import style from "./AttractionsPage.module.scss";

function AttractionsPage() {
  const cosmicVortexInfo =
    "Try your luck whit this new and exiting attraction. Prepare your self and venture through the black hole. Do you dare?";
  const galaxyRushInfo =
    "Experience the fast thrills of hyperspace! As the fastest attraction in cosmos the adrenaline junkie will get their fill.";
  const lunarLeapInfo =
    "Do you love the feeling of floating in water and wished you could jump higher? Seek no further! Take gigantic leaps on the moon and feel the joy of weightlessness.";

  return (
    <>
      <Header />
      <main className={style.wrapper}>
        <AttractionCard
          title="Cosmic Vortex"
          infoText={cosmicVortexInfo}
          src="./images/BlackHole.png"
          alt="Spaceship going into a black hole"
        />
        <AttractionCard
          title="Galaxy Rush"
          infoText={galaxyRushInfo}
          src="./images/HyperSpace.png"
          alt="A spaceship going through hyperspace"
          isReversed={true}
        />
        <AttractionCard
          title="Lunar Leap"
          infoText={lunarLeapInfo}
          src="./images/MoonJump.png"
          alt="Person in space suit jumping on a planet"
        />
      </main>
    </>
  );
}

export default AttractionsPage;
