import { MDBCol, MDBBtn, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import SingleScraptDataCard from "./components/SingleScraptDataCard";
const DataList = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6, 7]);
  const handlePrint=()=>{
   
  }
  return (
    <div className="datalist my-5 d-flex justify-content-center align-items-center">
      <MDBCol size="12" md="8" lg="6" xl="4">
        <div className="d-flex justify-content-between mb-4">
          <h5>Scrapted Data List</h5>
          <MDBBtn size="sm" onClick={handlePrint}>Download PDF</MDBBtn>
        </div>
        {/* scrapt data list */}
        <MDBRow>
          {count.map((i) => {
            return (
              <MDBCol size="12">
                <SingleScraptDataCard/>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBCol>
    </div>
  );
};

export default DataList;
