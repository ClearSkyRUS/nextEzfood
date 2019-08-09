import { observer } from "mobx-react";

import { Button, Form } from "semantic-ui-react";

const RegistrationForm = observer(({ form }) => (
  <Form error>
    <Form.Field>
      <Form.Input error={form.$("email").error} {...form.$("email").bind()} />
    </Form.Field>
    <Form.Field>
      <Form.Input
        error={form.$("password").error}
        {...form.$("password").bind()}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        error={form.$("passwordConfirm").error}
        {...form.$("passwordConfirm").bind()}
      />
    </Form.Field>
    <Button onClick={form.onSubmit}>Submit</Button>
  </Form>
));

export default RegistrationForm;
