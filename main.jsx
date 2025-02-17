import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OrdersTable from './food delivery system/components/ordertable.jsx'
import Login from './food delivery/login.jsx';
import Home from './food delivery/home.jsx';
import FoodInfo from './food delivery/foodinfo.jsx';
import Table from './food delivery/table.jsx';
import Upload from './food delivery/upload.jsx';
import EditInfo from './food delivery/editinfo.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRoute>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><MyNavbar /><Home /><Footer /></>} />
          <Route path="/:id" element={<><MyNavbar /><FoodInfo /><Footer /></>} />
          <Route path="/table" element={<><MyNavbar /><Table /><Footer /></>} />
          <Route path="/upload" element={<><MyNavbar /><Upload /><Footer /></>} />
          <Route path="/editinfo/:id" element={<><MyNavbar /><EditInfo/><Footer /></>} />
        </Routes>
      </BrowserRoute>
  </StrictMode>
)
