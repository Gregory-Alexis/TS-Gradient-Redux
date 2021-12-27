import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import allTags from "../fonctions/allTags";
import { AppDispatch } from "../redux/app/store";
import { setFilter } from "../redux/features/filterTag/filterTagSlice";

const GradientSelect: React.FC = () => {
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);
  const dispatch = useDispatch<AppDispatch>();
  const uniqueTags: string[] = allTags(data);

  return (
    <div className="flex justify-center items-center ">
      <label
        className="border-2 text-xl bg-gray-200 p-2 rounded-l-md"
        htmlFor="select"
      >
        Filtre
      </label>
      <select
        className="rounded-r-md p-3 outline-none w-full bg-white border xl:w-3/6"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        id="select"
      >
        <option value="All">Tous</option>

        {uniqueTags.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default GradientSelect;
