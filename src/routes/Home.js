import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.topContainer}>
      <div className={styles.headerCover}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.headerCopy}>The most popular</h1>
            <h1 className={styles.headerCopyHighlight}>Movie library</h1>
            <h1 className={styles.headerCopy}>for movie lovers</h1>
            <p>
              Life is too short for mediocre movies!
              <br />
              Curated collection of highest-rated films
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {loading ? (
          <h1 className={styles.loader}>Loading...</h1>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
