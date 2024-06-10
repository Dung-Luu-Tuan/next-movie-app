import { useEffect, useState } from "react";

const useMovieList = (type: string) => {
  const [movieList, setMovieList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`https://phimapi.com/v1/api/danh-sach/${type}?limit=32`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data?.data?.items);
        setName(data?.data?.titlePage);
      });
  }, [type]);

  return { movieList, name };
};

export default useMovieList;
