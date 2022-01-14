interface Props {
  colorStart: string;
  colorEnd: string;
}

const GradientCode: React.FC<Props> = ({ colorStart, colorEnd }) => {
  return (
    <code className="flex text-center text-gray-500 text-sm">{`backgroundImage: linear-gradient(to right, ${colorStart}, ${colorEnd})`}</code>
  );
};

export default GradientCode;
