module.exports = {
  evaluate: (req, res) => {
    const { x, operation, y } = req.params;
    let result;

    try {
      switch (operation) {
        case 'plus':
          result = x + y;
          break;
        case 'minus':
          result = x - y;
          break;
        case 'multiply':
          result = x * y;
          break;
        case 'divide':
          result = x / y;
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
    res.status(200).json({ result });
  },
};
