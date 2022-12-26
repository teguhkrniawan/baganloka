import React, { useState } from 'react';
import './header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faShip, faMotorcycle, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {

    const [openDate, setOpenDate] = useState(false)
    const [dates, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faShip} />
                        <span>Ship Rentals</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        <span>Motorcyle Rentals</span>
                    </div>
                </div>

                <h1 className="headerTitle">A lifetime of discounts ? It's Genius</h1>
                <p className='headerDesc'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae facere harum veniam mollitia tenetur non expedita.
                </p>

                <button className='headerBtn'>Sign in / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input
                            type="text"
                            placeholder='Where are you going ?'
                            className='headerSearchInput'
                        />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                        {
                            openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                minDate={new Date()}
                                className='date'
                            />
                        }
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className='headerSearchText'>2 Adult 0 Children 1 Room</span>
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header