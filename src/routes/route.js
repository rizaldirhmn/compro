import { Route, Switch } from "react-router-dom";
import { MuiAppbar } from "../components/mui-appbar/mui-appbar";
import { HomePage } from "../pages/home/home";

const PublicRoute = () => {
  return (
    <>
      <MuiAppbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default PublicRoute;
