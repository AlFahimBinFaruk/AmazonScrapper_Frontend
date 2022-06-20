import { MDBCol, MDBBtn, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import SingleScraptDataCard from "./components/SingleScraptDataCard";
import { useNavigate } from "react-router-dom";
//csv downloader
import CsvDownload from "react-json-to-csv";
//data list component
const DataList = () => {
  let navigate = useNavigate();
  //get initial state
  const { scraptedData, isError, message } = useSelector(
    (state) => state.scrapper
  );

  if (isError) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h4>{message}</h4>
        <MDBBtn onClick={() => navigate("/")}>Back to home</MDBBtn>
      </div>
    );
  }

  return (
    <div className="datalist my-5 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="6" xl="4">
        <div className="d-flex justify-content-between mb-4">
          <h5>
            <MDBIcon
              fas
              icon="arrow-left"
              onClick={() => navigate("/")}
              role="button"
            />{" "}
            Scrapted Data List
          </h5>
          <CsvDownload
            data={scraptedData}
            filename="scraptedData.csv"
            className="btn btn-sm"
          >
            Download PDF
          </CsvDownload>
        </div>
        {/* scrapt data list */}
        <MDBRow>
          {scraptedData.length > 0 ? (
            scraptedData.map((i, index) => {
              return (
                <MDBCol size="12" key={index}>
                  <SingleScraptDataCard {...i} />
                </MDBCol>
              );
            })
          ) : (
            <h6 className="text-danger">No Data Found</h6>
          )}
        </MDBRow>
      </MDBCol>
    </div>
  );
};

export default DataList;
