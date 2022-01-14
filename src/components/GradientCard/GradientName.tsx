interface Props {
  name: string;
}

const GradientName: React.FC<Props> = ({ name }) => {
  return <h1 className="pb-3 text-center font-semibold text-xl">{name}</h1>;
};

export default GradientName;
