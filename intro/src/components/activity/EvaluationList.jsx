import "../../index.css";
import { Evaluation_Card } from "../homepage_components/Evaluation_Card";
export function Evaluation_List({items}) {
  return (
    <div>
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
