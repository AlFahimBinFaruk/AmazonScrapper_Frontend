import { MDBCheckbox, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

const Home = () => {
  const [infoCheckboxObj, setInfoCheckboxObj] = useState({
    name: true,
    price: true,
    img: true,
    url: true,
    reviews: true,
    ratings: true,
  });
  return (
    <div className="home vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="6" lg="4" xl="3">
        <div className="form">
          {/* enter website url */}
          <div className="website-url mb-3">
            <h6 className="text-dark">Enter the ecom website url:</h6>
            <MDBInput type="text" size="sm" />
          </div>
          {/* select the options you want to scrapt */}
          <div className="options mb-4">
            <h6>
              <small className="text-dark">
                Select the info you want to scrapt:
              </small>
            </h6>
            <div className=" d-flex justify-content-between flex-wrap">
              {Object.keys(infoCheckboxObj).map((i) => {
                return (
                  <MDBCheckbox
                    name={i}
                    value=""
                    id="flexCheckDefault"
                    label={i}
                  />
                );
              })}
            </div>
          </div>
          {/* start btn */}
          <MDBBtn block size="sm">
            Start Scrapting
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Home;
