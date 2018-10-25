<<<<<<< HEAD
import Router from "koa-router";
import NotFoundError from "../errors/not-found";

const router = new Router();
const serialize = model => {
  return {
    type: "traces",
    id: model.id,
    attributes: {
      lat: model.lat,
      lng: model.lng,
      trace: model.trace
    },
    links: {
      self: `/traces/${model.id}`
    }
  };
};

// Get All
router.get("/", async ctx => {
  const pins = await ctx.app.db.Trace.findAll();
  ctx.body = { data: traces.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
  const id = ctx.params.id;
  const trace = await ctx.app.db.Pin.findById(id);
  if (trace === null) {
    throw new NotFoundError("Trace", id);
  }
  ctx.body = { data: serialize(trace) };
});

// Create new
router.post("/", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const pin = await ctx.app.db.Pin.create(attributes);
  ctx.status = 201;
  ctx.body = { data: serialize(pin) };
});

// Edit by Id
router.patch("/:id", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const id = ctx.params.id;
  const pin = await ctx.app.db.Pin.findById(id);
  Pin.set(attributes);
  await Pin.save();
  ctx.body = { data: serialize(pin) };
});

// Delete by Id
router.del("/:id", async ctx => {
  const id = ctx.params.id;
  const pin = await ctx.app.db.Pin.findById(id);
  await pin.destroy();
  ctx.status = 204;
  ctx.body = null;
});

export default router.routes();
=======
import Router from "koa-router";
import NotFoundError from "../errors/not-found";

const router = new Router();
const serialize = model => {
  return {
    type: "traces",
    id: model.id,
    attributes: {
      lat: model.lat,
      lng: model.lng,
      trace: model.trace
    },
    links: {
      self: `/traces/${model.id}`
    }
  };
};

// Get All
router.get("/", async ctx => {
  const pins = await ctx.app.db.Trace.findAll();
  ctx.body = { data: traces.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
  const id = ctx.params.id;
  const trace = await ctx.app.db.Pin.findById(id);
  if (trace === null) {
    throw new NotFoundError("Trace", id);
  }
  ctx.body = { data: serialize(trace) };
});

// Create new
router.post("/", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const pin = await ctx.app.db.Pin.create(attributes);
  ctx.status = 201;
  ctx.body = { data: serialize(pin) };
});

// Edit by Id
router.patch("/:id", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const id = ctx.params.id;
  const pin = await ctx.app.db.Pin.findOrFail(id);
  Pin.set(attributes);
  await Pin.save();
  ctx.body = { data: serialize(pin) };
});

// Delete by Id
router.del("/:id", async ctx => {
  const id = ctx.params.id;
  const pin = await ctx.app.db.Pin.findOrFail(id);
  await pin.destroy();
  ctx.status = 204;
  ctx.body = null;
});

export default router.routes();
>>>>>>> abdecda39aba25f5960de86d3cd20f41d7259ffd
