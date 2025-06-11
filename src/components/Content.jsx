import movies from "../data/movies.json";

function Content() {
  return (
    <div>
      <h2>Lista de peliculas</h2>
      <ul>
        {movies.map((movies) => {
          <li key={movies.id}>
            {movies.title} ({movies.year})
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Content;
