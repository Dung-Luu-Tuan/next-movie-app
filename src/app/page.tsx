"use client";
import MoviesList from "@/components/movies/MoviesList";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://phimapi.com/v1/api/danh-sach/phim-bo?limit=32")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data?.items);
        setName(data?.data?.titlePage);
      });
  }, []);

  return <MoviesList name={name} list={data} />;
};

export default Home;
