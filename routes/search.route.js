const { Router } = require("express");
const { search } = require("../controllers/search.controller");

const router = Router();

router.get("/:termino", search);

module.exports = router;
