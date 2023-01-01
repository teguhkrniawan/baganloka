import React, { useState } from 'react';
import './header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faShip, faMotorcycle, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {

    const navigate = useNavigate()
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState('')
    const [dates, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOpt, setOpenOpt] = useState(false);
    const [opt, setOpt] = useState({
        adult: 0,
        children: 0,
        room: 0
    })

    // handle option pemilihan adult, room, dan child
    const handleOption = (name, operation) => {
        setOpt((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? opt[name] + 1 : opt[name] - 1
            }
        })
    }

    // ketika btn search di klik
    const handleSearch = () => {
        navigate('/hotel', {
            state : {
                destination : destination,
                dates: dates,
                option: opt
            }
        })
    }


    return (
        <div className='header' >
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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

                {
                    type !== "list" &&
                    <>
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
                                    onChange={e => setDestination(e.target.value)}
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
                                <span className='headerSearchText' onClick={() => setOpenOpt(!openOpt)}>
                                    {`${opt.adult} Adult - ${opt.children} Children - ${opt.room} Room`}
                                </span>
                                {
                                    openOpt && <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button disabled={opt.adult < 1} className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>-</button>
                                                <span className="optionCounterNumber">{opt.adult}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button disabled={opt.children < 1} className="optionCounterButton" onClick={() => handleOption('children', 'd')}>-</button>
                                                <span className="optionCounterNumber">{opt.children}</span>
                                                <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <div className="optionCounter">
                                                    <button disabled={opt.room < 1} className="optionCounterButton" onClick={() => handleOption('room', 'd')}>-</button>
                                                    <span className="optionCounterNumber">{opt.room}</span>
                                                    <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Header