import axios from "axios";
import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../../redux/app/store";
import {
  setData,
  setError,
  setLoading,
} from "../../../redux/features/data/dataSlice";
import Loading from "../Loading";

const FullScreenPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);
  const loading = useSelector(
    (state: RootState) => state.loadDataSlice.loading
  );

  const { id } = useParams() as any;

  const style = {
    backgroundImage: `linear-gradient(to right, ${data[id - 1]?.start}, ${
      data[id - 1]?.end
    })`,
  };

  useEffect(() => {
    dispatch(setLoading(loading));

    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://gradients-api.herokuapp.com/gradients"
        );
        dispatch(setData(result.data));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch, loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : id < 26 ? (
        <div style={style} className="h-screen">
          <button className="bg-black text-white px-3 py-1 mr-1 rounded m-2">
            <Link to="/">Home</Link>
          </button>
          {id > 1 && (
            <button
              className="bg-black text-white px-3 py-1 mr-1 rounded"
              disabled={true}
            >
              <Link to={`/gradient/${Number(id) - 1}`}>Previous</Link>
            </button>
          )}

          {id < 25 && (
            <button className="bg-black text-white px-3 py-1 rounded">
              <Link to={`/gradient/${Number(id) + 1}`}>Next</Link>
            </button>
          )}
          <div
            className="flex flex-col justify-center items-center h-full"
            style={style}
          >
            <h1 className="text-4xl">{data[id - 1]?.name}</h1>
            <code className="text-center bg-white mt-5 rounded p-1">
              {`backgroundImage: linear-gradient(to right, ${
                data[id - 1]?.start
              }
              , ${data[id - 1]?.end})`}
            </code>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl pb-5">ERROR 404</h1>
          <p>Désolé, ce gradient n'existe pas...</p>
          <button className="bg-white text-black px-3 py-1 mr-1 mt-5 rounded">
            <Link to="/">Back Home</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default FullScreenPage;
