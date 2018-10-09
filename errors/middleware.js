import NotFoundError from "./not-found";

export default async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        switch (error.constructor) {
            case NotFoundError:
                ctx.status = 404;
                return (ctx.body = {
                    errors: {
                        code: 404,
                        title: "Not Found",
                        detail: `${error.modelName} not found with the id '${
                            error.id
                        }'`
                    }
                });
                break;
            default:
                ctx.status = 500;
                return (ctx.body = {
                    errors: {
                        code: 500,
                        title: "Internal Server Error",
                        detail: error.message
                    }
                });
        }
    }
};
