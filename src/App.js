import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import AddNew from "./Components/AddNew";
import Index from "./Components/Index";
import All from "./Components/All";
import Calender from "./Components/Calender";
import Account from "./Components/Account";
import AddNew from "./Components/AddNew";

function App() {
  return (
    <Router>
      <div className="App flex items-center justify-center h-[90vh]">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/all" element={<All />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add" element={<AddNew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
