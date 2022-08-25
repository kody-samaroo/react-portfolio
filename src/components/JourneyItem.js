import React from 'react';
import { JourneyItemStyles } from '../styles/JourneyItemStyles';

export default function JourneyItem({ darkMode, company, img, date, desc }) {
  return (
    <JourneyItemStyles darkMode={darkMode}>
        <img className="journey-item-img" src={img} alt="journey-preview"/>
        <div className="journey-item-info">
            <h3 className="journey-item-title">{company}</h3>
            <h4 className="journey-item-date">{date}</h4>
            <p className="journey-item-desc">{desc}</p>
        </div>
    </JourneyItemStyles>
  )
}
