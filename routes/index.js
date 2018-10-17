import Router from "koa-router";
import status from "./status";
import business from "./business";
const router = new Router();

router.use("/", status);

// Businesses
router.use("/businesses", business);
export default router;
