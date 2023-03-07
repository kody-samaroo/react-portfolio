import React from 'react';
import { WorkItemStyles } from '../styles/WorkItemStyles';

export default function JourneyItem({ company, img, date, desc }) {
  return (
    <WorkItemStyles>
        <img className="work-item-img" src={img} alt="work-preview"/>
        <div className="work-item-info">
            <h3 className="work-item-title">{company}</h3>
            <h4 className="work-item-date">{date}</h4>
            <p className="work-item-desc">{desc}</p>
        </div>
    </WorkItemStyles>
  )
}
