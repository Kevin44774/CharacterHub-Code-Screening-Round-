interface RecommendedMovie {
  id: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  genre: string;
  duration: string;
}

interface MovieRecommendationsProps {
  currentMovieId: string;
}

export default function MovieRecommendations({ currentMovieId }: MovieRecommendationsProps) {
  const recommendations: RecommendedMovie[] = [
    {
      id: "tt2015381",
      title: "Guardians of the Galaxy",
      year: "2014",
      poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/dfx419e-e0adccbd-8451-41dc-8540-bc37986b91c0.jpg/v1/fill/w_1280,h_1829,q_75,strp/guardians_of_the_galaxy_vol_3_action_poster_by_akithefull_dfx419e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyOSIsInBhdGgiOiJcL2ZcL2FhNDU0MDY5LTFmMzgtNGRiMS1hOWUzLTc1ZDZiMDBjNDJlOFwvZGZ4NDE5ZS1lMGFkY2NiZC04NDUxLTQxZGMtODU0MC1iYzM3OTg2YjkxYzAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OAxcpbR9VIc9vaVqZrh79U2ggNW8WjPOP38XxNlAoZg",
      rating: 8.0,
      genre: "Action, Adventure, Comedy",
      duration: "121 min"
    },
    {
      id: "tt4154756",
      title: "Avengers: Infinity War",
      year: "2018",
      poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
      rating: 8.4,
      genre: "Action, Adventure, Drama",
      duration: "149 min"
    },
    {
      id: "tt4154664",
      title: "Captain Marvel",
      year: "2019",
      poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
      rating: 6.8,
      genre: "Action, Adventure, Sci-Fi",
      duration: "123 min"
    },
    {
      id: "tt3501632",
      title: "Thor: Ragnarok",
      year: "2017",
      poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
      rating: 7.9,
      genre: "Action, Adventure, Comedy",
      duration: "130 min"
    },
    {
      id: "tt0816692",
      title: "Interstellar",
      year: "2014",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      rating: 8.7,
      genre: "Adventure, Drama, Sci-Fi",
      duration: "169 min"
    },
    {
      id: "tt0133093",
      title: "The Matrix",
      year: "1999",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      rating: 8.7,
      genre: "Action, Sci-Fi",
      duration: "136 min"
    }
  ];

  return (
    <section className="bg-background py-12 opacity-0 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}} data-testid="recommendations-section">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 opacity-0 animate-slide-in-up" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
          You Might Also Like
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {recommendations.map((movie, index) => (
            <div 
              key={movie.id}
              className="group bg-card rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer opacity-0 animate-fade-in"
              style={{animationDelay: `${1.6 + index * 0.1}s`, animationFillMode: 'forwards'}}
              data-testid={`recommendation-${index}`}
            >
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                  ★ {movie.rating}
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-accent text-accent-foreground rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <i className="fas fa-play text-xl"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-3">
                <h3 className="font-semibold text-card-foreground text-sm truncate group-hover:text-accent transition-colors duration-300">
                  {movie.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  {movie.year} • {movie.duration}
                </p>
                <p className="text-muted-foreground text-xs mt-1 truncate">
                  {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}