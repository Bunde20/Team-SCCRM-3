import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

const AuthPathing = ({ component: PageComponent, ...rest }) => {
  const navigate = useNavigate();
  const [renderComponent, setRenderComponent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // checks if the token exists
    if (token === null) {
      console.log("redirecting to homepage");
      setRenderComponent(<Homepage />);
      navigate("/");
    } else {
      console.log("rendering page component");
      setRenderComponent(<PageComponent {...rest} />);
    }
  }, [navigate]);

  return renderComponent;
};

export default AuthPathing;
