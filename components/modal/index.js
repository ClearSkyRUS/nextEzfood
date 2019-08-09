import { Modal } from "semantic-ui-react";

import { observer } from "mobx-react";

const CustomModal = observer(
  ({
    size,
    open,
    onClose,
    closeOnDimmerClick,
    trigger,
    header,
    content,
    actions
  }) => (
    <Modal
      size={size}
      open={open}
      onClose={onClose}
      trigger={trigger}
      closeOnDimmerClick={closeOnDimmerClick}
      closeIcon
    >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Actions>{actions}</Modal.Actions>
    </Modal>
  )
);

export default CustomModal;
