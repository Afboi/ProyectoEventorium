// Importing the DefaultActivityCard component
import { DefaultActivityCard } from "../homepage_components/DefaultActivityCard";

/**
 * Result Card component.
 * This component is used to deliver results in some swiper components
 *
 * Subcomponents:
 * @see DefaultActivityCard
 */
export function ResultSwiperCard() {
  return (
    <div className="border-2 border-bg-main  justify-between bg-white flex items-center rounded-lg p-3">
      {/* The DefaultActivityCard*/}
      <DefaultActivityCard />
    </div>
  );
}
