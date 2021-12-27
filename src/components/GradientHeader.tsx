import ClockWise from "../images/clockwise.svg";
import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";

interface ChangeColor {
  style: {};
  handleReloadClick: () => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}

const GradientHeader: React.FC<ChangeColor> = ({
  style,
  handleReloadClick,
  handleNextClick,
  handlePrevClick,
}) => {
  return (
    <div className="text-center text-white py-10 w-full" style={style}>
      <h1 className="text-5xl md:text-6xl lg:text-7xl pb-2">Gradient</h1>
      <p className="sm:text-xl md:text-2xl lg:text-3xl">
        Ultime collection de dégradés
      </p>
      <div className="pt-4">
        <button
          className="border-white border w-10 h-10 mr-2 rounded"
          onClick={handlePrevClick}
        >
          <img src={arrowLeft} alt="fleche gauche" className="m-auto" />
        </button>
        <button
          className="border-white border w-10 h-10 mr-2 rounded"
          onClick={handleReloadClick}
        >
          <img src={ClockWise} alt="fleche random" className="m-auto" />
        </button>
        <button
          className="border-white border w-10 h-10 rounded"
          onClick={handleNextClick}
        >
          <img src={arrowRight} alt="fleche droite" className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default GradientHeader;
