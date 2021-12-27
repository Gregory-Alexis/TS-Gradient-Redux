import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import allTags from "../fonctions/allTags";
import { setFilter } from "../redux/features/filterTag/filterTagSlice";

const GradientSelect = () => {
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);

  const dispatch = useDispatch();
  const uniqueTags: string[] = allTags(data);
  return (
    <select
      className="border w-full rounded mb-5 p-2"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    >
      <option value="All">Tous</option>
      {uniqueTags.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};

export default GradientSelect;
