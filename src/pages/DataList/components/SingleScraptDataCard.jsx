import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
const SingleScraptDataCard = () => {
  return (
    <MDBCard className="mb-3 shadow">
      <MDBCardBody className="d-flex justify-content-around flex-wrap">
        {/* product img */}
        <div className="product-img">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            alt=""
            srcset=""
            className="rounded-circle"
            width={100}
            height={100}
          />
        </div>
        {/* infos */}
        <div className="infos">
          {/* name */}
          <h6 className="text-dark">Macbook Pro M1 Max.</h6>
          {/* price */}
          <h6>
            <small>
              Price:<span className="fw-bold ms-1">$123</span>{" "}
            </small>
          </h6>
          {/* product link */}
          <h6>
            <small>
              Product Link:
              <a
                href="http://xyz.com"
                target="_blank"
                rel="noreferrer"
                className="ms-1"
              >
                https://mdbootstrap.comp
              </a>{" "}
            </small>
          </h6>
          {/* total reviews */}
          <h6>
            <small>
              Total Reviews:<span className="fw-bold ms-1">123</span>{" "}
            </small>
          </h6>
          {/* ratings */}
          <h6>
            <small>
              Ratings:<span className="fw-bold ms-1">4.3</span>{" "}
            </small>
          </h6>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleScraptDataCard;
