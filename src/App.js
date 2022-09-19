import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetails from "./components/user-details/UserDetails";
import UserInfo from "./components/user-info/UserInfo";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/details" element={<UserDetails/>}/>
              <Route path="/userinfo" element={<UserInfo/>}/>

            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row >
    </Container >
  );
}

export default App;
