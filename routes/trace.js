import Router from "koa-router";
import NotFoundError from "../errors/not-found";
import { isNull } from "util";

const router = new Router();
const serialize = model => {
  return {
    type: "traces",
    id: model.id,
    attributes: {
      pins: model.pins,
      type: model.type,
      squareMeters: model.squareMeters
    },
    links: {
      self: `/traces/${model.id}`
    }
  };
};

// Get All
router.get("/", async ctx => {
  const traces = await ctx.app.db.Traces.findAll();
  ctx.body = { data: traces.map(serialize) };
});

// Get by Id
router.get("/:id", async ctx => {
  const id = ctx.params.id;
  const trace = await ctx.app.db.Trace.findById(id);
  if (trace === null) {
    throw new NotFoundError("Trace", id);
  }
  ctx.body = { data: serialize(trace) };
});

// Create New
router.post("/", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const trace = await ctx.app.db.Trace.create(attributes);
  ctx.status = 201;
  ctx.set("location", `/traces/${trace.id}`);
  ctx.body = { data: serialize(trace) };
});

// Edit by Id
router.patch("/:id", async ctx => {
  const attributes = ctx.request.body.data.attributes;
  const id = ctx.params.id;
  const trace = await ctx.app.db.Trace.findById(id);
  trace.set(attributes);
  await trace.save();
  ctx.body = { data: serialize(trace) };
});

// Delete by Id
router.del("/:id", async ctx => {
  const id = ctx.params.id;
  const Trace = await ctx.app.db.Trace.findById(id);
  await trace.destroy();
  ctx.status = 204;
  ctx.body = null;
});

export default router.routes();
