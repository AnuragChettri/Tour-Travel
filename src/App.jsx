import { useState } from 'react'
import {RouterProvider} from 'react-router-dom';
import {appRouter} from './AppBody.jsx';

// import './App.css'

function App() {

  return(
    //Header
    <div>
      <RouterProvider router={appRouter} />
    </div>
    // Footer
  )
}

export default App
