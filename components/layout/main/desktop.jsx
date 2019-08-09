import { observer } from "mobx-react";
import Header from "./header";
import { LoginModal, RegistrationModal } from "components";

import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

const DesktopContainer = observer(
  ({ rootStore, open = rootStore.ModalStore.login, children }) => {
    const WindowStore = rootStore.WindowStore;
    const fixed = WindowStore.fixedMenu;
    const showFixedMenu = () => WindowStore.showFixedMenu();
    const hideFixedMenu = () => WindowStore.hideFixedMenu();
    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                <Menu.Item position="right">
                  <LoginModal
                    rootStore={rootStore}
                    trigger={
                      <Button
                        as="a"
                        inverted={!fixed}
                        onClick={() => rootStore.ModalStore.openModal("login")}
                      >
                        Войти
                      </Button>
                    }
                  />
                  <RegistrationModal
                    rootStore={rootStore}
                    trigger={
                      <Button
                        as="a"
                        inverted={!fixed}
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                        onClick={() =>
                          rootStore.ModalStore.openModal("registration")
                        }
                      >
                        Регистрация
                      </Button>
                    }
                  />
                </Menu.Item>
              </Container>
            </Menu>
            <Header />
          </Segment>
        </Visibility>
        {children}
      </>
    );
  }
);

export default DesktopContainer;
