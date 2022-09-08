import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component'
import Nav from './routes/nav/nav.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = ()=>{
   return (
      <h1>Shop</h1>
   )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/signIn" element={<SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;
