import React from 'react';
import './card-list.styles.css'

export const CardList = props => {
  return (
    <div className="card-list">
      <h1>{props.whateverThisIs}</h1> <h1>{ props.children }</h1>
    </div>)
}
