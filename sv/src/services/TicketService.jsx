import axios from 'axios'

const TICKET_BASE_REST_API_URL = 'https://localhost:7015/api/Flight';

class TicketService {

    getAllFlights() {
        return axios.get(TICKET_BASE_REST_API_URL, {headers: {'Authorization' : 'Bearer ' + localStorage.getItem("token"), 'Content-Type': 'application/json'}})
    }

    getFlightById(flightId) {
        return axios.get(TICKET_BASE_REST_API_URL + '/' + flightId);
    }

  
}

export default new TicketService();