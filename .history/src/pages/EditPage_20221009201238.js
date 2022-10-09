import React, { useEffect } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { useParams, Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function EditPage() {
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <>
      <TopNavbar title="Shipments" />
      <div className="customers_container">
        <div className="singleusers_body">
          <div className="singleusers_top">
            <Link to="/customers">
              <div className="arrow">
<BsFillArrowLeftSquareFill
              </div>
            </Link>
          </div>
          <div className="singleusers_middle"></div>
          <div className="singleusers_bottom"></div>
        </div>

      </div>
    </>
  );
}

export default EditPage;
