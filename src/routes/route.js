import { Route, Switch } from "react-router-dom";
import { MuiAppbar } from "../components/mui-appbar/mui-appbar";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";
import { CompanyPage } from "../pages/company/company";
import { HomePage } from "../pages/home/home";
import { ProjectPage } from "../pages/project/project";
import { ProjectDetailPage } from "../pages/detail-project/detail-project";

const PublicRoute = () => {
  return (
    <>
      <Switch>
        <MuiAppbar>
          <ScrollToTop />
          <Route exact path="/" component={HomePage} />
          <Route path="/company" component={CompanyPage} />
          <Route exact path="/project" component={ProjectPage} />
          <Route path="/project/:id" component={ProjectDetailPage} />
        </MuiAppbar>
      </Switch>
    </>
  );
};

export default PublicRoute;
