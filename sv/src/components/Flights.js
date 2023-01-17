import React, {useState, useEffect} from 'react'
import TicketService from '../services/TicketService';
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import "./Flights.css";

const Flights = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {

        getAllFlights();
    }, [])

    const getAllFlights = () => {
        TicketService.getAllFlights().then((response) => {
            setFlights(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        
      <main className="Flights"> 
      <TableBody>
                    {flights.map(flight =>
                        <TableRow className="TableRow" key={flight.id}>
      <section className="Ticket">
        <div class="cardWrap">
          <div class="card cardLeft">
            <div class="cardHeader">
              <h1>Let't <span>Traveling</span></h1>
            </div>
            <div class="titlel">
              <span>From</span>
              <h2>{flight.from}</h2>
            </div>
            <div class="name">
              <span>To</span>
              <h2>{flight.to}</h2>

            </div>
            <div class="seat">
              <span>Departure </span>
              <h2>{flight.departureTime}</h2>

            </div>
            <div class="time">
              <span>time</span>
              <h2>12:00</h2>

            </div>

          </div>
          <div class="card cardRight">
            <div class="eye"></div>
            <div class="number">
              <h3>{flight.countTickets}</h3>
              <span>tickets</span>
            </div>
            <div class="barcode"></div>
          </div>

        </div>
      </section>
         
                        </TableRow>)}
                </TableBody>
    </main>
        
                
         
    )
}

export default Flights;

