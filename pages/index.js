import MainPage from "components/content/mainPage";
import MainLayout from "components/layout/main";
import { getInitialState } from "utils";

const Page = () => <MainLayout Content={MainPage} />;

Page.getInitialProps = ({ req, rootStore }) => {
  return getInitialState(rootStore);
};

export default Page;
