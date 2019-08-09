import { inject, observer } from "mobx-react";

import Head from "./head";
import Footer from "./footer";

import DesktopContainer from "./desktop";
import MobileContainer from "./mobile";

const MainLayout = inject("rootStore")(
  observer(({ rootStore, Content, stars }) => (
    <>
      <Head />
      <ResponsiveContainer rootStore={rootStore}>
        {stars}
        <Content rootStore={rootStore} />
        <Footer />
      </ResponsiveContainer>
    </>
  ))
);

const ResponsiveContainer = observer(
  ({ children, rootStore, mobile = rootStore.WindowStore.mobile }) => {
    if (mobile)
      return (
        <MobileContainer rootStore={rootStore}>{children}</MobileContainer>
      );
    else
      return (
        <DesktopContainer rootStore={rootStore}>{children}</DesktopContainer>
      );
  }
);

export default MainLayout;
