import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobsPage from '../Pages/JobsPage/JobsPage'


function index() {
    return (
        <Routes>
            <Route path="/" element={<JobsPage />} />
        </Routes>
    )
}

export default index