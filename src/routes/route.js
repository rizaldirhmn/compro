import { Route, Switch } from "react-router-dom";
import { FooterComponent } from "../components/footer/footer";
import { MuiAppbar } from "../components/mui-appbar/mui-appbar";
import { CompanyPage } from "../pages/company/company";
import { HomePage } from "../pages/home/home";
import { ProjectPage } from "../pages/project/project";

const PublicRoute = () => {
  return (
    <>
      <MuiAppbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/project" component={ProjectPage} />
      </Switch>
      <FooterComponent />
    </>
  );
};

export default PublicRoute;
