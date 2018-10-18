import Router from "koa-router";
import status from "./status";
import business from "./business";
import address from "./address";
import trace from "./trace";
import pin from "./pin";
import user from "./user";
const router = new Router();

router.use("/", status);

// Businesses
router.use("/businesses", business);

// Addresses
router.use("/addresses", address);

// Trace
router.use("/traces", trace);

// Pin
router.use("/pins", pin);

// User
router.use("/users", user);

export default router;
