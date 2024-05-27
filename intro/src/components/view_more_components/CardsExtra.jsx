// Importing necessary libraries, components, and utilities
import "../homepage_components/styles.css";
import { ResultSwiperCard } from "./ResultSwiperCard";

// CardsExtra component displays a section of result cards.
export function CardsExtra() {
  return (
    <div className="flex flex-col rounded-xl bg-white w-full">
      {/* Section Title */}
      <section className="m-4">
        <h5 className="text-lg font-medium text-blue">Resultados</h5>
      </section>
      {/* Result Cards */}
      <div className="flex flex-col w-full gap-4 p-4">
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
