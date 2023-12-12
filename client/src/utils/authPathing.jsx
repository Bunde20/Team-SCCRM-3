import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";



const AuthPathing = ({ component: PageComponent, ...rest }) => {
  const navigate = useNavigate();
  const [renderComponent, setRenderComponent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
// checks if the token exists 
    if (token ) {
      setRenderComponent(<PageComponent {...rest} />);
    } else if (!token ) {
      setRenderComponent(<Homepage />);
      navigate("/"); // Navigate to homepage if not authenticated
    }
  }, []);

  return renderComponent;
};

export default AuthPathing;
