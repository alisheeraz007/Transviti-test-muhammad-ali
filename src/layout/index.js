import React from 'react'
import Header from '../Components/Header/Header'

function Layout(props) {
    return (
        <div className='layoutMain'>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout