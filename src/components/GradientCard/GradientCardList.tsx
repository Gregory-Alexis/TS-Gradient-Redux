import FullScreenButton from "./FullScreen/FullScreenButton";
import GradientCode from "./GradientCode";
import GradientName from "./GradientName";
import GradientPill from "./GradientPill";
import GradientTagButton from "./GradientTagButton";

interface Elem {
  name: string;
  colorStart: string;
  colorEnd: string;
  tags: string[];
  id: number;
}

const GradientCardList: React.FC<Elem> = ({
  name,
  colorStart,
  colorEnd,
  tags,
  id,
}) => {
  return (
    <div>
      <GradientPill colorEnd={colorEnd} colorStart={colorStart} />
      <GradientName name={name} />
      <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTagButton tags={tags} />
      <FullScreenButton id={id} />
    </div>
  );
};

export default GradientCardList;
