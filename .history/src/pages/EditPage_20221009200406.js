import React, { useEffect } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { useParams } from "react-router-dom";

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
            <div className="arrow"></div>
          </div>
          <div className="singleusers_middle"></div>
          <div className="singleusers_bottom"></div>
        </div>

        <div className="customers">EditPage</div>
      </div>
    </>
  );
}

export default EditPage;
