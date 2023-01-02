import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import './list.scss';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDate] = useState(location.state.dates)
  const [opt, setOpt] = useState(location.state.option)
  const [openOpt, setOpenOpt] = useState(false)


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
              <span onClick={() => setOpenOpt(!openOpt)} className='labelDate'>
                {
                  `${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`
                }
              </span>
            </div>
            {
              openOpt &&
              <DateRange
                onChange={item => setDate([item.selection])}
                ranges={dates}
                minDate={new Date()}
              />
            }

            <div className="listItem">
              <label htmlFor="#" style={{marginTop: '10px'}}>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" className="lsOptionInput" placeholder={opt.adult}/>
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" className="lsOptionInput" placeholder={opt.children} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" className="lsOptionInput" placeholder={opt.room}/>
                </div>
              </div>
            </div>
            
            <button className='btnSearch'>Search</button>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List