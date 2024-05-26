import "../homepage_components/styles.css";
import { ResultSwiperCard } from "./ResultSwiperCard";

export function CardsExtra() {
  return (
    <div className="swiper-assignments rounded-xl bg-white w-full">
      <section className="m-4">
        <h5 className="text-lg font-medium text-blue">Resultados</h5>
      </section>
      <div className="flex flex-col w-full h-[38.5rem] gap-4 p-4">
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
        <ResultSwiperCard />
      </div>
    </div>
  );
}
