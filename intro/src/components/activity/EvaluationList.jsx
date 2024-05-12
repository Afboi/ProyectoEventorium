import "../../index.css";
import { Evaluation_Card } from "../homepage_components/EvaluationCard.jsx";
import { ProgressBar } from "../homepage_components/ProgressBar.jsx";
export function Evaluation_List({ items }) {
  return (
    <div>
      <ProgressBar />
      <>
        {items.map((item) => (
          <Evaluation_Card
            key={item.id}
            title={item.title}
            porcent={item.porcent}
            hour={item.hour}
            initials={item.initials}
          />
        ))}
      </>
    </div>
  );
}
