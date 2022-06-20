import { MDBSpinner } from "mdb-react-ui-kit";
const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h6>Please Wait data is scrapting!!!</h6>
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
};

export default Loading;
