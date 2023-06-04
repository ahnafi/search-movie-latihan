import { useEffect, useRef, useState } from "react";
import { getMovie, searchIdMovie } from "./services/film.services";

function App() {
  const [movie, setMovie] = useState([]);
  // landing page
  useEffect(() => {
    getMovie("superman", (data) => {
      setMovie(data);
    });
  }, []);
  //
  function searchHandler(e) {
    e.preventDefault();
    const search = e.target.search.value;
    getMovie(search, (data) => {
      setMovie(data);
    });
  }
  //
  function fullViewHandler() {
    searchIdMovie("tt1285016", (data) => {
      console.log(data);
    });
  }
  return (
    <section
      id="home"
      className={`bg-slate-700 py-28 w-full ${
        movie.length == 0 && "h-screen"
      } `}
    >
      <div className="container relative">
        <div className="text-center  px-4">
          <h1 className="text-4xl font-semibold text-white">
            Cari info Film kamu disini{" "}
          </h1>
          <p className="text-white font-medium font-serif pt-2">by SULTHON</p>
        </div>
        <div className="flex justify-center">
          <form
            action=""
            onSubmit={(e) => {
              searchHandler(e);
            }}
          >
            <input
              type="text"
              placeholder="superman"
              name="search"
              id="search"
              className="px-4 py-2 rounded-l-lg mt-12 shadow-lg"
            />
            <button
              type="submit"
              className=" bg-white px-2 py-2 rounded-r-lg hover:bg-slate-100"
            >
              🔎
            </button>
          </form>
        </div>
        {movie.length == 0 && <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-white py-12 font-bold">LOADING</h2>
          <div className="px-4 py-4 w-16 h-16 rounded-full bg-white animate-bounce "></div> 
          </div>}
        <div className=" flex flex-wrap justify-center pt-12 px-4 gap-3">
          {movie.length > 0 &&
            movie.map((i) => {
              return (
                <div
                  key={i.imdbID}
                  className="bg-white w-full max-w-md px-4 py-2 rounded-lg "
                >
                  <img
                    src={i.Poster}
                    alt="poster"
                    className="w-full h-80 object-cover hover:object-contain py-2"
                  />
                  <div className="py-4 ">
                    <h2 className="font-bold text-xl text-slate-600">
                      {i.Title}
                    </h2>
                    <p className="font-normal text-base text-slate-500">
                      {i.Type} release {i.Year}
                    </p>
                    <button
                      id={i.imdbID}
                      className="px-4 py-2 bg-slate-700 text-white font-bold rounded-lg mt-2 hover:bg-slate-500"
                    >
                      full
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* tampil data */}
        {/* <div className="absolute bg-slate-100 w-full max-w-2xl px-4 py-2 top-0 left-1/2 -translate-x-1/2 z-50 rounded-lg shadow-lg flex ">
          <img
            src=""
            alt=""
            className="bg-black w-64 h-96 rounded-lg shadow-lg"
          />
          <div className="px-4 py-2 w-full flex flex-col justify-around">
            <h2 className="font-bold text-xl ">judul</h2>
            <p>genre</p>
            <p>bahasa</p>
            <p>relis & runtime</p>
            <p>director</p>
            <p>writer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              vitae necessitatibus consequatur voluptas ducimus quod incidunt
              aperiam, libero animi recusandae.
            </p>
            <button className="fixed right-0 top-0 text-xl bg-slate-300 px-2 rounded-full">
              X
            </button>
          </div>
        </div> */}
        {/*  */}
      </div>
    </section>
  );
}

export default App;
