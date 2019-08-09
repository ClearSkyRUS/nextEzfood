import { observer } from "mobx-react";

import { LoginModal, RegistrationModal } from "components";
import Header from "./header";

import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

const MobileContainer = observer(
  ({ rootStore, children, user = rootStore.UserStore.user.email }) => {
    const WindowStore = rootStore.WindowStore;
    const sidebarOpened = WindowStore.sidebarOpened;
    const togleSidebar = () => WindowStore.togleSidebar();
    const hideSidebar = () => WindowStore.hideSidebar();
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          onHide={hideSidebar}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={togleSidebar}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <LoginModal
                    rootStore={rootStore}
                    trigger={
                      <Button
                        as="a"
                        inverted
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
                        inverted
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
              </Menu>
            </Container>
            <Header mobile user={user} />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
);

export default MobileContainer;
