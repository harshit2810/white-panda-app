import React from 'react';

const Card = ({ title, subtitle, active }) => (
  <div>
    <div className="card">
        <div className="card__top">
        {!active ? (<img alt="placeholder" src="/images/placeholder.png" />) : (<div className="card__circle"></div>)}
        <div className="card__head">
            {!active ? (<span className="card__title">{title}</span>) : (<span className="card__title card__title--active">{title}</span>)}
          
          <span className="card__sub-title">{subtitle}</span>
        </div>
        </div>
        <span className="card__data">Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users.</span>
      <button className="btn btn--order">Order</button>
    </div>
  </div>
);

export default Card;