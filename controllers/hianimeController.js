exports.getHome = (req, res) => {
  res.json({ message: "Data home" });
};

exports.getAZList = (req, res) => {
  const page = req.query.page;
  res.json({ page: page, data: [] });
};