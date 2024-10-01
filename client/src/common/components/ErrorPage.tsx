import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Button variant="contained" onClick={() => navigate("/")}>
          Click here to return to main page
        </Button>
      </p>
    </div>
  );
};
