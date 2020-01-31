import React from 'react';
import './menu.css';

export default function () {
  return (
    <div className="navbar">
      <a href="/home">Home</a>
      <a href="/philosophies">Philosophies</a>
      <a href="/about">About</a>
    </div>
  );
}