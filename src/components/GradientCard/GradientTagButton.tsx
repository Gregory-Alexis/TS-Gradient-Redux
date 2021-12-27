import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/store";
import { setFilter } from "../../redux/features/filterTag/filterTagSlice";

interface Props {
  tags: string[];
}

const GradientTagButton: React.FC<Props> = ({ tags }) => {
  const filter = useSelector((state: RootState) => state.filterTag.tags);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="space-x-1">
      {tags.map((el) => (
        <button
          className={`${
            filter === el ? "bg-gray-400" : "bg-black text-white"
          } rounded px-2 py-1 mt-3 `}
          value={filter}
          onClick={() => dispatch(setFilter(el))}
          key={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default GradientTagButton;
