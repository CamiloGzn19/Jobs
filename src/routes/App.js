import React, { Component } from 'react';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobList from '../components/JobList'

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/Jobs" element={<JobList />} />
            </Routes>
        </BrowserRouter>
    )
  }
}
