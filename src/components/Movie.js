import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
      </Link>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p className={styles.movie__summary}>
        <Link to={`/movie/${id}`}>{summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}</Link>
      </p>
      <p className={styles.goDetail}>
        <Link to={`/movie/${id}`}>{`Detail >>`}</Link>
      </p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
