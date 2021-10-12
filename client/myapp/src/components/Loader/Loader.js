import { useHistory } from "react-router";
import Notifications from "react-notifications/lib/Notifications";
export const Loader = (data1) => {
    const history  = useHistory();

  return (
    
      <div class="loader">
         {/* <Notifications/> */}
          Loading...
         {/* if(data1){
             history.push("/login")
         } */}
      </div>
    
  );
};
