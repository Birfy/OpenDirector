export function I({ middleware, trigger, method, handler, uiConfig }) {
  return middleware.buildRunner({
    trigger,
    method,
    handler,
    uiConfig,
  });
}
