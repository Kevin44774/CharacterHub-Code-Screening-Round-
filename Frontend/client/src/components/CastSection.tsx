interface CastMember {
  name: string;
  character: string;
  imageId: string;
}

interface CastSectionProps {
  cast: CastMember[];
}

export default function CastSection({ cast }: CastSectionProps) {
  return (
    <section className="bg-background py-12 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}} data-testid="cast-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground break-words whitespace-normal opacity-0 animate-slide-in-up" 
              style={{animationDelay: '0.8s', animationFillMode: 'forwards'}} 
              data-testid="cast-section-title"
              >Top Billed Cast</h2>
          <button className="text-accent hover:text-accent/80 font-medium transition-all duration-300 hover:scale-105 opacity-0 animate-slide-in-up text-sm sm:text-base self-start sm:self-auto" style={{animationDelay: '1s', animationFillMode: 'forwards'}} data-testid="button-view-more-cast">
            View More <i className="fas fa-arrow-right ml-1"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {cast.map((actor, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg shadow-md overflow-hidden cast-card-hover opacity-0 animate-fade-in transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{animationDelay: `${1.2 + index * 0.1}s`, animationFillMode: 'forwards'}}
              data-testid={`cast-card-${index}`}>
              <div className="aspect-[3/4] bg-muted">
                <img 
                  src={actor.imageId} 
                  alt={actor.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  data-testid={`cast-image-${index}`}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-card-foreground text-sm truncate" data-testid={`cast-name-${index}`}>
                  {actor.name}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 truncate" data-testid={`cast-character-${index}`}>
                  {actor.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}