import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <>
      <div>NotFound Page</div>
      <p>{title}</p>
      <Link to="/">
        <button>
          <span>Вернуться на главную</span>
        </button>
      </Link>
    </>
  );
};

export default NotFound;
