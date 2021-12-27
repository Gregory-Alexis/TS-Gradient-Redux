import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const FullScreenPage: React.FC = () => {
  const data = useSelector((state: RootStateOrAny) => state.loadDataSlice.data);
  const { id } = useParams() as any;
  const style = {
    backgroundImage: `linear-gradient(to right, ${data[id - 1]?.start}, ${
      data[id - 1]?.end
    })`,
  };

  return (
    <>
      {id < 26 ? (
        <div style={style} className="min-h-screen p-2">
          <button className="bg-black text-white px-3 py-1 mr-1">
            <NavLink to="/">Home</NavLink>
          </button>

          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl">{data[id - 1].name}</h1>
            <code className="text-center bg-white mt-5">
              backgroundImage: `linear-gradient(to right, ${data[id - 1]?.start}
              , ${data[id - 1]?.end})`
            </code>
            <div className="mt-5">
              <button
                className="bg-black text-white px-3 py-1 mr-1  rounded"
                disabled={true}
              >
                {console.log(id)}
                <NavLink to={`/gradient/${Number(id) - 1}`}>Previous</NavLink>
              </button>

              {id < 25 && (
                <button className="bg-black text-white px-3 py-1  rounded">
                  <NavLink to={`/gradient/${Number(id) + 1}`}>Next</NavLink>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl pb-5">ERROR 404</h1>
          <p>Désolé, ce gradient n'existe pas...</p>
          <button className="bg-white text-black px-3 py-1 mr-1 mt-5 rounded">
            <NavLink to="/">Back Home</NavLink>
          </button>
        </div>
      )}
    </>
  );
};

// id > 25 || (id < 0 && );

export default FullScreenPage;
