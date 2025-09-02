import { useState } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  unhelpful: number;
  avatar: string;
}

interface ReviewsSectionProps {
  movieTitle: string;
}

export default function ReviewsSection({ movieTitle }: ReviewsSectionProps) {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      author: 'MovieBuff2023',
      rating: 9,
      date: '2024-01-15',
      content: 'Absolutely fantastic sequel! The character development is incredible, and the emotional depth really caught me off guard. The soundtrack is phenomenal as always.',
      helpful: 24,
      unhelpful: 2,
      avatar: 'https://ui-avatars.com/api/?name=MovieBuff2023&background=6366f1&color=fff'
    },
    {
      id: '2',
      author: 'SciFiFan',
      rating: 8,
      date: '2024-01-12',
      content: 'Great visuals and humor, though some plot points felt rushed. Still a solid entry in the MCU with heart and spectacular action sequences.',
      helpful: 18,
      unhelpful: 5,
      avatar: 'https://ui-avatars.com/api/?name=SciFiFan&background=ec4899&color=fff'
    },
    {
      id: '3',
      author: 'CinemaLover',
      rating: 7,
      date: '2024-01-10',
      content: 'Good movie overall but doesn\'t quite reach the heights of the first one. The family themes work well and Baby Groot is adorable.',
      helpful: 12,
      unhelpful: 8,
      avatar: 'https://ui-avatars.com/api/?name=CinemaLover&background=10b981&color=fff'
    }
  ]);

  const [newReview, setNewReview] = useState({
    rating: 0,
    content: ''
  });

  const [filter, setFilter] = useState<'all' | number>('all');

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating >= filter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Submitted review:', newReview);
    setNewReview({ rating: 0, content: '' });
  };

  const renderStars = (rating: number, interactive: boolean = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
            className={`
              ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}
              ${interactive ? 'hover:text-yellow-300 transition-colors cursor-pointer' : 'cursor-default'}
              text-sm
            `}
            disabled={!interactive}
          >
            ★
          </button>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {rating}/10
        </span>
      </div>
    );
  };

  return (
    <section className="bg-background py-8" data-testid="reviews-section">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Write Review Form */}
        <div className="bg-card rounded-lg p-6 mb-8 border border-border">
          <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              {renderStars(newReview.rating, true, (rating) => 
                setNewReview(prev => ({ ...prev, rating }))
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <textarea
                value={newReview.content}
                onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                placeholder={`Share your thoughts about ${movieTitle}...`}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground resize-none h-32 focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <div className="text-xs text-muted-foreground mt-1">
                {newReview.content.length}/500 characters
              </div>
            </div>
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
              disabled={newReview.rating === 0 || newReview.content.trim().length < 10}
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Filter Reviews */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">User Reviews ({reviews.length})</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Filter by rating:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="bg-card border border-border rounded px-3 py-1 text-sm"
            >
              <option value="all">All Reviews</option>
              <option value={8}>8+ Stars</option>
              <option value={6}>6+ Stars</option>
              <option value={4}>4+ Stars</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-card rounded-lg p-6 border border-border opacity-0 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <div className="flex items-start space-x-4">
                <img 
                  src={review.avatar} 
                  alt={review.author}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-foreground mb-4 leading-relaxed">
                    {review.content}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-green-500 transition-colors">
                      <i className="fas fa-thumbs-up"></i>
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-red-500 transition-colors">
                      <i className="fas fa-thumbs-down"></i>
                      <span>Not Helpful ({review.unhelpful})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}