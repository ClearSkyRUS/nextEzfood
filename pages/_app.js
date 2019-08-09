import App, { Container } from "next/app";
import React from "react";
import { initializeStore } from "store/rootStore";
import { Provider } from "mobx-react";

class MyMobxApp extends App {
  static async getInitialProps(appContext) {
    const rootStore = initializeStore();
    appContext.ctx.rootStore = rootStore;
    let appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: rootStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.rootStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  componentDidMount() {
    this.rootStore.WindowStore.getWindowParams();
    this.rootStore.UserStore.getUser();
    window.addEventListener("resize", () => {
      this.rootStore.WindowStore.getWindowParams();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      this.rootStore.WindowStore.getWindowParams();
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider rootStore={this.rootStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default MyMobxApp;
