import { RootStateOrAny, useSelector } from "react-redux";
import { filterByTag } from "../../fonctions/filterByTag";
import { RootState } from "../../redux/app/store";
import GradientCardList from "./GradientCardList";

interface Elem {
  name: string;
  start: string;
  end: string;
  tags: string[];
  id: number;
}

const GradientCard: React.FC = () => {
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);
  const filter = useSelector((state: RootState) => state.filterTag.tags);
  const list = filterByTag(data, filter, "All");
  return (
    <ul className="space-y-5">
      {list.map((el: Elem) => (
        <li className="border p-5 shadow-lg" key={el.id}>
          <GradientCardList
            name={el.name}
            colorStart={el.start}
            colorEnd={el.end}
            tags={el.tags}
            id={el.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default GradientCard;
