import React, { Component } from "react";
import MobxReactForm from "mobx-react-form";

import { plugins, hooks } from "forms";

class FormWrapper extends Component {
  constructor(props) {
    super(props);
    const { fields, actions } = this.props;
    this.form = new MobxReactForm(
      { fields },
      { plugins, hooks: hooks(actions) }
    );
  }
  render() {
    return <>{this.props.render(this.form)}</>;
  }
}

export default FormWrapper;
