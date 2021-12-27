interface Props {
  colorStart: string;
  colorEnd: string;
}

const GradientCode: React.FC<Props> = ({ colorStart, colorEnd }) => {
  return (
    <code className="text-gray-500 text-sm flex text-center">{`backgroundImage: linear-gradient(to right, ${colorStart}, ${colorEnd})`}</code>
  );
};

export default GradientCode;
