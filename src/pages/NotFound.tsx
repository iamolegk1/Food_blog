import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as NotFoundImg } from "../assets/image/notf.svg";
interface INotFound {
  title: string;
}

const NotFound: FC<INotFound> = ({ title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const container = {
    display: "block",
    margin: "0 auto",
    width: "300px",
    height: "auto",
  };

  return (
    <>
      <p>{title}</p>
      <NotFoundImg style={container} />
      <Link to="/">
        <button>
          <span>Вернуться на главную</span>
        </button>
      </Link>
    </>
  );
};

export default NotFound;
