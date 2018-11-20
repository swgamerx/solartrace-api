import Router from "koa-router";
import NotFoundError from "../errors/not-found";

const router = new Router();
const serialize = model => {
  return {
    type: "addresses",
    id: model.id,
    attributes: {
      address1: model.address1,
      address2: model.address2,
      city: model.city,
      state: model.state,
      zipcode: model.zipcode,
      business: model.Business,
      lat: model.lat,
      lng: model.lng,
      placeId: model.placeId,
      country: model.country
    },
    links: {
      self: `/addresses/${model.id}`
    }
  };
};

// Get All
router.get("/", async ctx => {
  const addresses = await ctx.app.db.Address.findAll();
  ctx.body = { data: addresses.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
  const id = ctx.model.id;
  const address = await ctx.app.db.Address.findOrFail(id);
  if (address === null) {
    throw new NotFoundError("Address", id);
  }
  ctx.body = { data: serialize(address) };
});

// Create New
router.post("/", async ctx => {
    console.log(ctx.request.body.data)
  const attributes = ctx.request.body.data.attributes;
  const address = await ctx.app.db.Address.create(attributes);
  console.log(address);
  ctx.status = 201;
  ctx.set("Location", `/addresses/${address.id}`);
  ctx.body = { data: serialize(address) };
});

// Edit by Id
router.patch("/:id", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const id = ctx.params.id;
  const address = await ctx.app.db.Address.findOrFail(id);
  address.set(attributes);
  await address.save();
  ctx.body = { data: serialize(address) };
});

// Delete by Id
router.del("/:id", async ctx => {
  const id = ctx.params.id;
  const address = await ctx.app.db.Address.findOrFail(id);
  await address.destroy();
  ctx.status = 204;
  ctx.body = null;
});

export default router.routes();
