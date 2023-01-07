import NavHeader from "../components/NavHeader";
import { Container }  from 'react-bootstrap';
import { Outlet } from "react-router-dom";

const BaseLayout = (): JSX.Element => {
  return (
    <>
    <NavHeader  />
    <Container className="py-4">
      <Outlet />
    </Container>
    </>
  );
};
export default BaseLayout;