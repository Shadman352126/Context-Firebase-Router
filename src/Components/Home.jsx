import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const name = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl">This is Home</h2>
      <p>Owner name:{name.name}</p>
    </div>
  );
};

export default Home;
