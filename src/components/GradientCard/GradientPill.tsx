interface Props {
  colorStart: string;
  colorEnd: string;
}

const GradientPill: React.FC<Props> = ({ colorStart, colorEnd }) => {
  const linearGradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
  return (
    <div className="pb-3 w-full flex justify-center ">
      <div
        className="w-20 h-20 rounded-full"
        style={{ backgroundImage: `${linearGradient}` }}
      ></div>
    </div>
  );
};

export default GradientPill;
