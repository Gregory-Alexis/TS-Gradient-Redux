import { NavLink } from "react-router-dom";

interface Props {
  id: number;
}

const FullScreenButton: React.FC<Props> = ({ id }) => {
  return (
    <div className="border border-black rounded text-center mt-3 p-1">
      <NavLink to={`/gradient/${id}`}>Full Screen</NavLink>
    </div>
  );
};

export default FullScreenButton;
