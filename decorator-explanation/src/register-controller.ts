import 'reflect-metadata';

export function registerControllers(app: any, controllers: any[]) {
  controllers.forEach(controller => {
    const controllerInstance = new controller();
    const basePath = Reflect.getMetadata('controller:path', controller);
    const version = Reflect.getMetadata('controller:version', controller);

    Object.getOwnPropertyNames(Object.getPrototypeOf(controllerInstance)).forEach(methodName => {
      const routeHandler = controllerInstance[methodName];
      const httpMethod = Reflect.getMetadata('route:method', routeHandler);
      const routePath = Reflect.getMetadata('route:path', routeHandler);

      const fullPath = `/v${version}/${basePath}${routePath}`;

      if (httpMethod) {
        app[httpMethod](fullPath, (req: any, res: any) => {
          const result = routeHandler.apply(controllerInstance);
          res.json(result);
        });
        console.log(`Route registered: ${httpMethod.toUpperCase()} ${fullPath}`);
      }
    });
  });
}
