import React from "react";
import "./Flights.css";

export default function Flights() {
    return (
        <main className="Flights">
        <section className="Ticket">
        <div class="cardWrap">
  <div class="card cardLeft">
    <div class = "cardHeader">
    <h1>Let't <span>Traveling</span></h1>
    </div>
    <div class="titlel">
      <span>From</span>
      <h2>New York</h2>
    </div>
    <div class="name">
    <span>To</span>
      <h2>Paris</h2>
      
    </div>
    <div class="seat">
    <span>Departure </span>
      <h2>20.03.2000</h2>
      
    </div>
    <div class="time">
    <span>time</span>
      <h2>12:00</h2>
      
    </div>
    
  </div>
  <div class="card cardRight">
    <div class="eye"></div>
    <div class="number">
      <h3>180</h3>
      <span>tickets</span>
    </div>
    <div class="barcode"></div>
  </div>

</div>
        </section>
        </main>
    )
}