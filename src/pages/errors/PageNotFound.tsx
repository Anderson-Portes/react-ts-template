import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

const PageNoutFound = (): JSX.Element => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
          <p className="lead">
              The page you’re looking for doesn’t exist.
            </p>
          <Link to={'/'} className="btn btn-primary">
            <Icon name="arrow-left" marginEnd={2}/>Go Home
          </Link>
      </div>
  </div>
  );
}

export default PageNoutFound;