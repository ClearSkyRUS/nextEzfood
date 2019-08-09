import { observer } from "mobx-react";

import { FormWrapper, login } from "forms";
import { LoginForm, CustomModal } from "components";

const LoginModal = observer(
  ({ rootStore, open = rootStore.ModalStore.login, trigger }) => (
    <FormWrapper
      fields={login}
      actions={{
        onSuccess: rootStore.UserStore.loginUser
      }}
      render={form => (
        <CustomModal
          open={open}
          onClose={() => rootStore.ModalStore.closeModal("login")}
          closeOnDimmerClick={false}
          size="mini"
          trigger={trigger}
          header="Войдите в свой аккаунт!"
          content={<LoginForm form={form} />}
        />
      )}
    />
  )
);

export default LoginModal;
