import  {getPopularMovies, searchMovies} from '../api/tmdb.js'
import useMovieStore from '../store/useMovieStore'
import {useQuery} from "@tanstack/react-query";

const Home = () => {
    const {searchQuery, setSearchQuery} = useMovieStore();

    const {data, isLoading, isError} = useQuery({
        queryKey: ['movies', searchQuery],
        queryFn: () => searchQuery
        ? searchMovies (searchQuery).then(res => res.data)
            : getPopularMovies().then(res => res.data)


    })
    return (
        <div className='min-h-screen bg-gray-900 text-white p-8'>
            <h1 className='text-4xl font-bold text-center mb-8'>
                🎬  Movie app
            </h1>
            {'Search'}
            <input
            type='text'
            placeholder='Search movies...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full max-w-xl mx-auto block p-3 rounded-lg bg-gray-800 text-white'
            />
            {/*State*/}
            {isLoading && <p className='text-center'>Loading...</p> }
            {isError && <p className='text-center text-red-500'> Something went wrong</p> }
            {/*Films list*/}
            <div className='grid grid-cols-2 md:grid-cols-4 mt-3 gap-6 max-w-6xl mx-auto'>
                {data?.results?.map(movie => (
                    <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className='w-full'/>
                        <div className="p-3">
                            <h2 className="font-semibold text-sm">{movie.title}</h2>
                            <p className="text-gray-400 text-xs">{movie.release_date?.slice(0,4)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;