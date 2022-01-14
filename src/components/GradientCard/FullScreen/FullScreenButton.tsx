import { NavLink } from "react-router-dom";

interface Props {
  id: number;
}

const FullScreenButton: React.FC<Props> = ({ id }) => {
  return (
    <NavLink to={`/gradient/${id}`}>
      <button
        type="button"
        className="w-full border border-black text-center rounded mt-3 p-1"
      >
        Full Screen
      </button>
    </NavLink>
  );
};

export default FullScreenButton;
