const res = {
  send(data, status = 2000) {
    return {
      status,
      data,
    };
  },
  _: {
    mount(info, res) {
      const { data, status } = info;
      return res
        .status(status)
        .send(data);
    },
    serverError(error, res, controller) {
      const { message } = error;
      console.log(`${controller} has Error: ${message}`);
      res
        .status(500)
        .send({ message });
    },
  },
};

module.exports = res;
