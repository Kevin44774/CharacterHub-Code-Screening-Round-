import { useState } from 'react';
import CircularProgress from './CircularProgress';
import InteractiveRating from './InteractiveRating';

interface MovieData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  imdbVotes: string;
  Poster: string;
}

interface HeroSectionProps {
  movieData: MovieData;
  onShowTrailer: () => void;
  onShowPoster: () => void;
}

export default function HeroSection({ movieData, onShowTrailer, onShowPoster }: HeroSectionProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [starred, setStarred] = useState(false);
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(13, 37, 63, 0.7), rgba(13, 37, 63, 0.8)), url('${movieData.Poster}')`
  };

  const handleLike = () => {
    setLiked(!liked);
    // Add visual feedback
    const button = document.querySelector('[data-testid="button-favorite"]');
    button?.classList.add('animate-pulse');
    setTimeout(() => button?.classList.remove('animate-pulse'), 600);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    const button = document.querySelector('[data-testid="button-bookmark"]');
    button?.classList.add('animate-bounce');
    setTimeout(() => button?.classList.remove('animate-bounce'), 600);
  };

  const handleStar = () => {
    setStarred(!starred);
    const button = document.querySelector('[data-testid="button-rate"]');
    button?.classList.add('animate-spin');
    setTimeout(() => button?.classList.remove('animate-spin'), 600);
  };

  return (
    <section 
      className="hero-bg min-h-screen flex items-center relative overflow-hidden bg-cover bg-center" 
      style={backgroundStyle}
      data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Movie Poster */}
          <div className="lg:col-span-1 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <div className="relative cursor-pointer group max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-lg" onClick={onShowPoster}>
              <img 
                src={movieData.Poster} 
                alt={movieData.Title + ' poster'}
                className="w-full rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:brightness-110"
                data-testid="movie-poster"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <div className="text-white text-center">
                  <i className="fas fa-expand text-3xl mb-2"></i>
                  <p className="text-sm font-medium">View Full Size</p>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2 space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2" data-testid="movie-title">
                {movieData.Title}
                <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-normal">({movieData.Year})</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6" data-testid="movie-metadata">
                <span className="bg-muted px-2 py-1 rounded text-sm font-medium" data-testid="movie-rating">{movieData.Rated}</span>
                <span data-testid="movie-release-date">{movieData.Released}</span>
                <span data-testid="movie-runtime">{movieData.Runtime}</span>
                <div className="flex flex-wrap gap-2">
                  {movieData.Genre?.split(', ').map(genre => (
                    <span 
                      key={genre} 
                      className="text-accent hover:underline cursor-pointer"
                      data-testid={`genre-${genre.toLowerCase().replace(' ', '-')}`}>
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* User Score and Actions */}
              <div className="flex flex-wrap items-start gap-6 mb-6">
                {/* User Score Circle */}
                <div className="flex items-center gap-3 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                  <CircularProgress 
                    score={Math.round(parseFloat(movieData.imdbRating) * 10)} 
                  />
                  <div className="text-sm">
                    <div className="font-semibold" data-testid="text-user">User</div>
                    <div className="text-muted-foreground" data-testid="text-score">Score</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-12" data-testid="button-list">
                    <i className="fas fa-list text-lg"></i>
                  </button>
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 transition-all duration-300 ${liked ? 'text-red-500 scale-110' : 'text-muted-foreground hover:text-red-500'}`} 
                    data-testid="button-favorite"
                  >
                    <i className={`${liked ? 'fas' : 'far'} fa-heart text-lg`}></i>
                    {liked && <span className="text-sm font-medium">Liked!</span>}
                  </button>
                  <button 
                    onClick={handleBookmark}
                    className={`flex items-center gap-2 transition-all duration-300 ${bookmarked ? 'text-yellow-500 scale-110' : 'text-muted-foreground hover:text-yellow-500'}`} 
                    data-testid="button-bookmark"
                  >
                    <i className={`${bookmarked ? 'fas' : 'far'} fa-bookmark text-lg`}></i>
                    {bookmarked && <span className="text-sm font-medium">Saved!</span>}
                  </button>
                  <button 
                    onClick={handleStar}
                    className={`flex items-center gap-2 transition-all duration-300 ${starred ? 'text-yellow-400 scale-110' : 'text-muted-foreground hover:text-yellow-400'}`} 
                    data-testid="button-rate"
                  >
                    <i className={`${starred ? 'fas' : 'far'} fa-star text-lg`}></i>
                    {starred && <span className="text-sm font-medium">Rated!</span>}
                  </button>
                </div>

                {/* Play Trailer Button */}
                <button 
                  onClick={onShowTrailer} 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover-lift animate-button-glow flex items-center gap-2"
                  data-testid="button-play-trailer">
                  <i className="fas fa-play"></i>
                  <span>Play Trailer</span>
                </button>

                {/* Interactive Rating Component */}
                <div className="flex-shrink-0">
                  <InteractiveRating 
                    initialScore={Math.round(parseFloat(movieData.imdbRating) * 10) / 10}
                    onRate={(rating) => console.log(`User rated: ${rating}/10`)}
                  />
                </div>
              </div>

              {/* Tagline/Plot */}
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground" data-testid="movie-tagline">
                  Obviously.
                </p>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Overview</h3>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed" data-testid="movie-plot">
                    {movieData.Plot}
                  </p>
                </div>
              </div>
            </div>

            {/* Crew Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6" data-testid="crew-info">
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground text-sm sm:text-base" data-testid="director-name">James Gunn</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Director, Writer</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground text-sm sm:text-base" data-testid="writer-name">Larry Lieber</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Jim Starlin</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.3s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Bill Mantlo</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Steve Gan</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Stan Lee</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Keith Giffen</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.7s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Val Mayerik</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.8s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Steve Englehart</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1.9s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Steve Gerber</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '2.0s', animationFillMode: 'forwards'}}>
                <h4 className="font-semibold text-foreground">Jack Kirby</h4>
                <p className="text-sm text-muted-foreground">Characters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}