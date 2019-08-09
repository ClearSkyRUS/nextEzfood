const hooks = actions => {
  return {
    onSuccess(form) {
      try {
        actions.onSuccess(form.values());
      } catch (err) {}
    },
    onError(form) {
      console.log(form.errors());
      try {
        actions.onError(form.values());
      } catch (err) {}
    }
  };
};

export default hooks;
