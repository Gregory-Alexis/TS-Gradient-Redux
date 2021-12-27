import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import GradientHeader from "./components/GradientHeader";
import GradientCard from "./components/GradientCard/GradientCard";
import GradientSelect from "./components/GradientSelect";
import { AppDispatch, RootState } from "./redux/app/store";
import { setData, setLoading, setError } from "./redux/features/data/dataSlice";
import { useParams } from "react-router-dom";
import Loading from "./components/GradientCard/Loading";

const App = () => {
  const loading = useSelector(
    (state: RootState) => state.loadDataSlice.loading
  );
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);
  const error = useSelector((state: RootState) => state.loadDataSlice.error);
  const dispatch = useDispatch<AppDispatch>();

  const chooseGradient = () => Math.floor(Math.random() * data.length);
  const [randomGradient, setRandomGradient] = useState<number>(chooseGradient);

  const style = {
    backgroundImage: `linear-gradient(to right, ${data[randomGradient]?.start}, ${data[randomGradient]?.end})`,
  };
  const { id } = useParams as any;
  useEffect(() => {
    dispatch(setLoading(loading));
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://gradients-api.herokuapp.com/gradients`
        );

        dispatch(setData(result.data));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
    fetchData();
  }, [dispatch, loading, id]);

  const handleReloadClick = () => {
    setRandomGradient(chooseGradient);
  };
  const handleNextClick = () => {
    setRandomGradient(
      randomGradient === data.length - 1 ? 0 : randomGradient + 1
    );
  };
  const handlePrevClick = () => {
    setRandomGradient(
      randomGradient === 0 ? data.length - 1 : randomGradient - 1
    );
  };

  return (
    <>
      <GradientHeader
        style={style}
        handleReloadClick={handleReloadClick}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
      <div className="px-5 pt-5 lg:px-20">
        <GradientSelect />
        {loading && <Loading />}
        {error && <h1>{error}</h1>}
        <GradientCard />
      </div>
    </>
  );
};

export default App;
