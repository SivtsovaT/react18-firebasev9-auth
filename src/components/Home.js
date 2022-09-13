import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import {useState} from "react";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('')

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const sum = () => {
    let bob = parseInt(day + month);
    console.log(bob)
  }
  sum();

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <input type='number'
             value={day}
             onChange={(e) => setDay(e.target.value)}
      />
      <input type='text'
             value={month}
             onChange={(e) => setMonth(e.target.value)}
      />
      <div>{sum}</div>
    </>
  );
};

export default Home;



