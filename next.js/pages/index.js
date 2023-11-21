import { useEffect, useState } from "react";
import Lee from "../components/Lee";

const API_KEY = "1c7a9d363bba62a9fe35d7825b54b569";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        (async() => {
            const {results} = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);
    return (
        <div>
            <Lee title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}