import { Routes, Route } from "react-router-dom";
import CheckOut from "./routes/check-out/check-out.compnent";
import Home from './routes/home/home.component'
import Nav from './routes/nav/nav.component';
import Shop from "./routes/shop/shop.component";
import SignIn from './routes/sign-in/sign-in.component';






const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/checkOut" element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
};

export default App;
