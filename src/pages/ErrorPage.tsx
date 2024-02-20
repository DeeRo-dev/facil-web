import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: Error | undefined = useRouteError() as Error | undefined;

  return (
    <div id="error-page">
      <h1>¡Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      {error && (
        <p>
          <i>{error.message}</i>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
