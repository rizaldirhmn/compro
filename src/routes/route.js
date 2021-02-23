import { Route, Switch } from "react-router-dom";
import { FooterComponent } from "../components/footer/footer";
import { MuiAppbar } from "../components/mui-appbar/mui-appbar";
import { HomePage } from "../pages/home/home";

const PublicRoute = () => {
  return (
    <>
      <MuiAppbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <FooterComponent />
    </>
  );
};

export default PublicRoute;
