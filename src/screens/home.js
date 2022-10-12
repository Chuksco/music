import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
    return (
        <Router>
            <Routes>
                <Route geth="/" element={<Library />} />
            </Routes>
        </Router>
    )
}



