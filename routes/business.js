import Router from "koa-router";
import NotFoundError from "../errors/not-found";

const router = new Router();
const serialize = model => {
    return {
        type: "businesses",
        id: model.id,
        attributes: {
            name: model.name
        },
        links: {
            self: `/businesses/${model.id}`
        }
    };
};

// Get All
router.get("/", async ctx => {
    const businesses = await ctx.app.db.Business.findAll();
    ctx.body = { data: businesses.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
    const id = ctx.params.id;
    const business = await ctx.app.db.Business.findById(id);
    if (business === null) {
        throw new NotFoundError("Business", id);
    }
    ctx.body = { data: serialize(business) };
});

// Create New
router.post("/", async ctx => {
    const attributes = ctx.request.body.data.attributes;
    const business = await ctx.app.db.Business.create(attributes);
    ctx.status = 201;
    ctx.set("Location", `/businesses/${business.id}`);
    ctx.body = { data: serialize(business) };
});

// Edit by Id
router.patch("/:id", async ctx => {
    const attributes = ctx.request.body.data.attributes;
    const id = ctx.params.id;
    const business = await ctx.app.db.Business.findById(id);
    business.set(attributes);
    await business.save();
    ctx.body = { data: serialize(business) };
});

// Delete by Id
router.del("/:id", async ctx => {
    const id = ctx.params.id;
    const business = await ctx.app.db.Business.findById(id);
    await business.destroy();
    ctx.status = 204;
    ctx.body = null;
});

export default router.routes();
