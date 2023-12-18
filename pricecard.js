import React, { useState } from 'react';
import './PriceCard.css'; // Import your CSS file for styling

const PriceCard = () => {
  // State to manage the plan details
  const [plan, setPlan] = useState({
    name: 'Basic Plan',
    price: '$19.99',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  });

  // Function to toggle the plan details
  const togglePlan = () => {
    setPlan((prevPlan) => {
      // Toggle between Basic and Premium plans
      if (prevPlan.name === 'Basic Plan') {
        return {
          name: 'Premium Plan',
          price: '$29.99',
          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        };
      } else {
        return {
          name: 'Basic Plan',
          price: '$19.99',
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
        };
      }
    });
  };

  return (
    <div className="price-card">
      <h2>{plan.name}</h2>
      <p className="price">{plan.price}</p>
      <ul className="features">
        {/* Map through features and display them */}
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={togglePlan}>Toggle Plan</button>
    </div>
  );
};

export default PriceCard;
