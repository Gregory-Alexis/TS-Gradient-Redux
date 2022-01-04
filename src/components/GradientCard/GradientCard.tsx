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
    <ul className="gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-4 mt-5 ">
      {list.map((el: Elem) => (
        <li
          className="border p-5 my-2 shadow-[10px_10px_15px_-10px_rgba(0,0,0,0.3)]"
          key={el.id}
        >
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
