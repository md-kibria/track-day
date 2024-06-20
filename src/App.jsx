import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import Home from './pages/Home'
import Manage from './pages/Manage'
import History from './pages/History'
import HistoryItem from './pages/HistoryItem'
import Settings from './pages/Settings'
import Guide from './pages/Guide'
import Download from './pages/Download'
import About from './pages/About'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="manage" element={<Manage />} />
        <Route path="history" element={<History />} />
        <Route path="history/:id" element={<HistoryItem />} />
        <Route path="settings" element={<Settings />} />
        <Route path="guide" element={<Guide />} />
        <Route path="download" element={<Download />} />
        <Route path="about" element={<About />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}