import axios from "axios";
import Cookies from "js-cookie";

const setAuthToken = (blisspoint_fpc) => {
  if (blisspoint_fpc) {
    Cookies.set("blisspoint_fpc", blisspoint_fpc);
    axios.defaults.headers.common["x-auth-token"] = blisspoint_fpc;
  } else {
    Cookies.remove("blisspoint_fpc");
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;