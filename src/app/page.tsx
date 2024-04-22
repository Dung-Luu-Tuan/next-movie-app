"use client";

import MoviesList from "@/components/moviesList/MoviesList";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://phimapi.com/v1/api/danh-sach/phim-bo?limit=32")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data?.items);
        setTitle(data?.data?.titlePage);
      });
  }, []);

  return <MoviesList title={title} list={data} />;
};

export default Home;
