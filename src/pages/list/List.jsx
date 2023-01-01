import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import './list.scss';
import { format } from 'date-fns';

const List = () => {

  const location = useLocation();
  
  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [opt, setOpt] = useState(location.state.opt)

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='title'>Search</h1>
            <div className="listItem">
              <label htmlFor="#">Destination</label>
              <input type="text" placeholder={destination} name="destination" id="destination" />
            </div>

            <div className="listItem">
              <label htmlFor="#">Check in date</label>
              <span>
                {
                  `${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`
                }
              </span>
            </div>
          </div>
          <div className="listResult">
            Result
          </div>
        </div>
      </div>
    </div>
  )
}

export default List