import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";

function Film({ films }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <h1>TOP RATED FILMS</h1>
        <ul>
          {films.results.map((film, i) => (
            <li key={i} >{film.title}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=9e258d80593e28910beaaa7653d2c793&language=en-US&page=1`
  );
  const films = await res.json();

  // Pass data to the page via props
  return { props: { films } };
}

export default Film;
