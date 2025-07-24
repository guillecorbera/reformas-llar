// components/Reviews.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    ))}
  </div>
);

const Reviews = ({ t }) => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <h2 className="section-title">{t.reviews.title}</h2>
        <div className="reviews-grid">
          {t.reviews.items.map((review, index) => (
            <div key={index} className="review-card">
              <StarRating rating={review.rating} />
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;