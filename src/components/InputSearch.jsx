import React, { useState } from 'react'

const InputSearch = ({ setSearchLocation }) => {




    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.firstChild.value)
    }

    return (
        <header className="search-bar flex">

            <form className='search-bar__form flex' onSubmit={searchLocation} action="">
                <input className='search-bar__input' type="text" placeholder='Enter number  1 - 126' />
                <button className='search-bar__btn flex'><i className='bx bx-search search-bar_icon'></i></button>
            </form>

            <div className="icon-animation flex">
                <div className="icon-floating flex">
                    <a href="#inf-location"><i className='bx bx-down-arrow-alt icon-floating-icon'></i></a>

                </div>
            </div>


        </header>
    )
}

export default InputSearch