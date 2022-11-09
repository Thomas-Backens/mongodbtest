const mongoQuery = require("../../Utils/db");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const hymns = await mongoQuery.getAllHymns();
        res.status(200).json({ hymns });
        break;
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
};
