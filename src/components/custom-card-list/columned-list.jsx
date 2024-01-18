import React from "react";
import "./custom-card-list.scss"

const ColumnedList = ({ items }) => (
  <ul className='columned-list'>
    {Array.isArray(items) &&
      items.map((e, ind) => <li key={`cl-item-${ind}`}>{e.title}</li>)}
  </ul>
);

export default ColumnedList;