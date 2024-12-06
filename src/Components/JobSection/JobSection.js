import React from 'react'
import { NavLink } from 'react-router-dom'
import JobCard from '../JobCard/JobCard'

function JobSection(props) {
    return (
        <div className='JobSectionMain'>
            <div className='heading'>
                <h2>{props.title}</h2>
                <div className='textDiv'>
                    <p>
                        <NavLink>See {props.title}</NavLink>
                    </p>
                </div>
            </div>

            <div className='JobCardsDiv'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default JobSection