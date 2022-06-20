import { MDBCheckbox, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScraptedData } from "../../features/scrapper/scrapperSlice";
//error context
import { useGlobalAlertContext } from "../../contexts/alertContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/Loading";
const Home = () => {
  //error handle
  let { setShowAlert } = useGlobalAlertContext();
  //navigate
  let navigate = useNavigate();
  //dispatch
  const dispatch = useDispatch();
  //get initial state
  const { isLoading } = useSelector((state) => state.scrapper);
  //page info
  const [pageURL, setPageURL] = useState("");
  const [infoCheckboxObj, setInfoCheckboxObj] = useState({
    name: false,
    price: false,
    imgURL: false,
    productLink: false,
    stars: false,
    ratings: false,
    overview: false,
  });
  let { name, price, imgURL, productLink, stars, ratings, overview } =
    infoCheckboxObj;
  //handle change of input
  const handleChange = (e) => {
    setInfoCheckboxObj((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value === "false" ? true : false,
      };
    });
  };

  //handle submit
  const handleSubmit = () => {
    if (
      pageURL &&
      (name || price || imgURL || productLink || stars || ratings || overview)
    ) {
      let body = { url: pageURL, ...infoCheckboxObj };
      dispatch(getScraptedData(body))
        .then(() => {
          navigate("/scrapted-data");
        })
        .catch(() => {
          setShowAlert({ msg: "Some errror occured", color: "danger" });
        });
    } else {
      setShowAlert({ msg: "Provide all info", color: "danger" });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="home vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="6" lg="4">
        <div className="form">
          {/* enter website url */}
          <div className="website-url mb-3">
            <h6 className="text-dark">
              Enter the Amazon page URL you want to scrapt:
            </h6>
            <MDBInput
              type="text"
              size="sm"
              value={pageURL}
              onChange={(e) => setPageURL(e.target.value)}
            />
          </div>
          {/* select the options you want to scrapt */}
          <div className="options mb-4">
            <h6>
              <small className="text-dark">
                Select the info you want to scrapt:
              </small>
            </h6>
            <div className=" d-flex justify-content-between flex-wrap">
              {Object.entries(infoCheckboxObj).map((i, index) => {
                return (
                  <MDBCheckbox
                    key={index}
                    name={i[0]}
                    value={i[1]}
                    onChange={handleChange}
                    id="flexCheckDefault"
                    label={i[0]}
                    checked={i[1]}
                  />
                );
              })}
            </div>
          </div>
          {/* start btn */}
          <MDBBtn block size="sm" onClick={handleSubmit}>
            Start Scrapting
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Home;
