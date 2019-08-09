import { observer } from "mobx-react";

import { FormWrapper, registration } from "forms";
import { RegistrationForm, CustomModal } from "components";

const RegistrationModal = observer(
  ({ rootStore, open = rootStore.ModalStore.registration, trigger }) => (
    <FormWrapper
      fields={registration}
      actions={{
        onSuccess: rootStore.UserStore.registrUser
      }}
      render={form => (
        <CustomModal
          open={open}
          onClose={() => rootStore.ModalStore.closeModal("registration")}
          closeOnDimmerClick={false}
          size="mini"
          trigger={trigger}
          header="Зарегистрируйтесь!"
          content={<RegistrationForm form={form} />}
        />
      )}
    />
  )
);

export default RegistrationModal;
