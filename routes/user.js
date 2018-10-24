import Router from "koa-router";
import user from "../models/user";
import business from "../models/business";

const router = new Router();
const serialize = model => {
    return {
        type: "user",
        id: model.id,
        attributes: {
            username: model.username
        },
        links: {
            self: `/user/${model.id}`
        }
    };
};

// Get All
router.get("/", async ctx => {
    const Users = await ctx.app.db.User.findAll();
    ctx.body = { data: Users.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
    const id = ctx.params.id;
    const user = await ctx.app.db.User.findOrFail(id);

    ctx.body = { data: serialize(business) };
});

// Create New
router.post("/", async ctx => {
    const attributes = ctx.request.body.data.attributes;
    const user = await ctx.app.db.User.create(attributes);
    ctx.status = 201;
    ctx.set("Location", `/user/${user.id}`);
    ctx.body = { data: serialize(user) };
});

// Edit by Id
router.patch("/:id", async ctx => {
    const attributes = ctx.request.body.data.attributes;
    const id = ctx.params.id;
    const user = await ctx.app.db.User.findOrFail(id);
    user.set(attributes);
    await user.save();
    ctx.body = { data: serialize(user) };
});

// Delete by Id
router.del("/:id", async ctx => {
    const id = ctx.params.id;
    const user = await ctx.app.db.User.findOrFail(id);
    await user.destroy();
    ctx.status = 204;
    ctx.body = null;
});

export default router.routes();
