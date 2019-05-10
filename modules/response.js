const res = {
  send(data, status = 200) {
    return {
      status,
      data,
    };
  },
  error({ message, status }) {
    return {
      status,
      data: { message }
    }
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
