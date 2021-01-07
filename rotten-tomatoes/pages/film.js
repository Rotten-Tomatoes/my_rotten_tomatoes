import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";

function Film({ films, categories }) {
  console.log(films);
  console.log(categories);
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <h1>ALL FILMS</h1>
        {films.results.map((film, i) => (
          <div className="movie" key={i}>
            <h2>{film.title}</h2>
            <p>({film.release_date})</p>
            <div>
              <img
                width="200"
                alt={`The movie titled: ${film.title}`}
                src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
              />
            </div>
            <p>{film.overview}</p>
          </div>
        ))}

        <h1>Genres</h1>
        <ul>
          {categories.genres.map((genre, i) => (
            <li key={i}>{genre.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  const genre_id = "";
  // Fetch data from external API
  const res1 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=9e258d80593e28910beaaa7653d2c793&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}`
  );
  const films = await res1.json();

  const res2 = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=9e258d80593e28910beaaa7653d2c793&language=en-US`
  );
  const categories = await res2.json();

  // Pass data to the page via props
  return { props: { films, categories } };
}

export default Film;
