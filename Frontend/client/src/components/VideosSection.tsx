import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  type: 'trailer' | 'clip' | 'featurette' | 'interview';
  thumbnail: string;
  duration: string;
  embedUrl?: string;
}

interface VideosSectionProps {
  onOpenTrailer: () => void;
}

export default function VideosSection({ onOpenTrailer }: VideosSectionProps) {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Official Trailer #2',
      type: 'trailer',
      thumbnail: 'https://img.youtube.com/vi/dW1BIid8Osg/maxresdefault.jpg',
      duration: '2:31'
    },
    {
      id: '2',
      title: 'Behind the Scenes: Making of',
      type: 'featurette',
      thumbnail: 'https://img.youtube.com/vi/3MMMe1drnZY/maxresdefault.jpg',
      duration: '4:15'
    },
    {
      id: '3',
      title: 'Baby Groot Dance Scene',
      type: 'clip',
      thumbnail: 'https://img.youtube.com/vi/Ms_3XaKWLl0/maxresdefault.jpg',
      duration: '1:42'
    },
    {
      id: '4',
      title: 'Cast Interview',
      type: 'interview',
      thumbnail: 'https://img.youtube.com/vi/6kWNwwrrYYs/maxresdefault.jpg',
      duration: '8:30'
    },
    {
      id: '5',
      title: 'Deleted Scenes Compilation',
      type: 'clip',
      thumbnail: 'https://img.youtube.com/vi/dW1BIid8Osg/maxresdefault.jpg',
      duration: '3:22'
    },
    {
      id: '6',
      title: 'Director Commentary',
      type: 'featurette',
      thumbnail: 'https://img.youtube.com/vi/3MMMe1drnZY/maxresdefault.jpg',
      duration: '12:45'
    }
  ];

  const [filter, setFilter] = useState<'all' | Video['type']>('all');

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(video => video.type === filter);

  const getTypeIcon = (type: Video['type']) => {
    switch (type) {
      case 'trailer': return 'fas fa-play-circle';
      case 'clip': return 'fas fa-film';
      case 'featurette': return 'fas fa-video';
      case 'interview': return 'fas fa-microphone';
      default: return 'fas fa-play';
    }
  };

  const getTypeBadge = (type: Video['type']) => {
    const colors = {
      trailer: 'bg-red-500',
      clip: 'bg-blue-500',
      featurette: 'bg-green-500',
      interview: 'bg-purple-500'
    };
    
    return (
      <span className={`${colors[type]} text-white text-xs px-2 py-1 rounded-full uppercase font-semibold`}>
        {type}
      </span>
    );
  };

  return (
    <section className="bg-background py-8" data-testid="videos-section">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h3 className="text-xl font-semibold mb-4 sm:mb-0">Videos & Trailers</h3>
          <div className="flex flex-wrap gap-2">
            {(['all', 'trailer', 'clip', 'featurette', 'interview'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize
                  ${filter === type 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground'
                  }
                `}
              >
                {type === 'all' ? 'All Videos' : type + 's'}
                {type !== 'all' && (
                  <span className="ml-2 bg-accent/20 text-xs px-2 py-1 rounded-full">
                    {videos.filter(v => v.type === type).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVideos.map((video, index) => (
            <div 
              key={video.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer opacity-0 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
              onClick={() => video.id === '1' ? onOpenTrailer() : console.log('Play video:', video.title)}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-accent text-accent-foreground rounded-full p-4 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <i className={`${getTypeIcon(video.type)} text-2xl`}></i>
                  </div>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
                  {video.duration}
                </div>
                
                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  {getTypeBadge(video.type)}
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-foreground text-sm sm:text-base line-clamp-2 group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-muted-foreground text-xs mt-1 capitalize">
                  {video.type} • {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-video text-4xl text-muted-foreground mb-4"></i>
            <p className="text-muted-foreground">No videos found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}