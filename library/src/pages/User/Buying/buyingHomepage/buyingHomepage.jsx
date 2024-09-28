import React from "react";
import "./buyingHomepage.css";

import Usernavbar from "../../../../usercomponents/userNavbar/usernavbar";
import BuyingBookdetails from "../../../../usercomponents/buyingBookdetails/buyingBookdetails";

const buyingHomepage = () => {
  return (
    <div>
      <div>
        <Usernavbar />
      </div>
      <div>
        <BuyingBookdetails />
      </div>
    </div>
  );
};

export default buyingHomepage;
