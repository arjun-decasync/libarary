import React from "react";
import "./sellinghome.css";

import Usernavbar from "../../../../usercomponents/userNavbar/usernavbar";
import SellingUserdetails from "../../../../usercomponents/sellingUserdetails/sellingUserdetails";
import SellingAddedBookdetails from "../../../../usercomponents/sellingAddedBookdetails/sellingAddedBookdetails";

const sellinghome = () => {
  return (
    <div>
      <div>
        <Usernavbar />
      </div>
      <div>
        <SellingUserdetails />
      </div>
      <div>
        <SellingAddedBookdetails />
      </div>
    </div>
  );
};

export default sellinghome;
