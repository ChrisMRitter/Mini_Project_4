import { useEffect, useState } from "react";
import "./App.css";
import "./hooks/useMovies";

const App = () => {
    {/* State vars. Many will be moved to components later. movies state has been moved*/}
    {/*const [loading, setLoading] = useState(true);*/}
    const[filters, setFilters] = useState({genre: '', ageGroup: '', year: ''});
    const [sortBy, setSortBy] = useState('year-desc');
    const [wishlist, setWishlist] = useState([]);
    const [watched, setWatched] = useState([]);

    const {movies, loading, error } = useMovies();

    return (
        < div classname="min-h-screen flex flex-col">
            <Navbar wishlist={wishlist} watched={watched} />
            <main className="flex-1">
                {/* FilterBar, SortControls, MovieGrid go here */}
                <div>{loading ? "Loading.." : movies.length + " movies loaded"}</div>
                </main>
                <Footer />

            </div>
        );
}

export default App;
