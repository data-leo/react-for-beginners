import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (!movie) {
    return (
      <div>
        <div className={styles.loading}>Loading...</div>;
      </div>
    );
  }

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${movie.background_image})` }}>
      <div className={styles.mainContainer}>
        <img src={movie.large_cover_image} alt={movie.title} className={styles.img} />
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.infobox}>
          <div>⭐️ {movie.rating}</div>
          <div>{movie.genres[0]}</div>
          <div>{movie.year}</div>
          <div>{movie.runtime} minutes</div>
          <div>{movie.language}</div>
        </div>
        <div>
          <h2>Synopsis</h2>
          {movie.description_full}
        </div>
        <div>
          <h2>Genres</h2>
          <div className={styles.genres}>
            {movie.genres.map((g) => (
              <div key={g}>{g}</div>
            ))}
          </div>
        </div>
        <div className={styles.gohome}>
          <h3>
            <Link to={`/`}>{`<< Go home`}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Detail;
