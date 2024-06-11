import { MovieCategory } from "@/types/enums";
import { useEffect, useState } from "react";

const useMovieList = (type: MovieCategory) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`https://phimapi.com/v1/api/danh-sach/${type}?limit=32`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data?.data?.items);
      });
  }, [type]);

  return { movieList };
};

export default useMovieList;
