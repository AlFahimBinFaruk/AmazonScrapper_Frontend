import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
const SingleScraptDataCard = ({
  name,
  price,
  imgURL,
  productLink,
  stars,
  ratings,
  overview,
  error,
}) => {
  return (
    <MDBCard className="mb-3 shadow">
      <MDBCardBody className="d-flex justify-content-around flex-wrap">
        {/* product img */}
        {imgURL && (
          <div className="product-img">
            <img
              src={imgURL}
              alt=""
              srcset=""
              className="rounded-circle"
              width={100}
              height={100}
            />
          </div>
        )}
        {/* infos */}
        <div className="infos text-wrap">
          {/* name */}
          {name && <h6 className="text-dark">{name}</h6>}
          {/* price */}
          {price && (
            <h6>
              <small>
                Price:<span className="fw-bold ms-1">{price}</span>{" "}
              </small>
            </h6>
          )}
          {/* product link */}
          {productLink && (
            <h6>
              <small>
                Product Link:
                <a
                  href={productLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ms-1"
                >
                  View this on Amazon
                </a>
              </small>
            </h6>
          )}
          {/* stars */}
          {stars && (
            <h6>
              <small>
                Stars:<span className="fw-bold ms-1">{stars}</span>{" "}
              </small>
            </h6>
          )}
          {/* ratings */}
          {ratings && (
            <h6>
              <small>
                Ratings:<span className="fw-bold ms-1">{ratings}</span>{" "}
              </small>
            </h6>
          )}
          {/* overview */}
          {(overview && overview.length) > 0 && (
            <>
              <h6 className="text-dark text-decoration-underline">
                Product Overview
              </h6>
              {overview.map((i) => {
                return (
                  <p className="mb-1">
                    <small>
                      <span className="text-dark fw-bold me-1">{i.name}:</span>
                      {i.value}
                    </small>
                  </p>
                );
              })}
            </>
          )}
          {/* error? */}
          {error && (
            <h6 className="text-danger">
              <small>{error}</small>
            </h6>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleScraptDataCard;
