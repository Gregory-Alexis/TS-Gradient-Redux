interface Props {
  name: string;
}

const GradientName: React.FC<Props> = ({ name }) => {
  return <h1 className="text-center font-semibold text-xl pb-3">{name}</h1>;
};

export default GradientName;
