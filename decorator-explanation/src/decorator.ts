import 'reflect-metadata';

export function Controller(metadata: { path: string; version: string }) {
  return function (target: any) {
    Reflect.defineMetadata('controller:path', metadata.path, target);
    Reflect.defineMetadata('controller:version', metadata.version, target);
  };
}

export function Get(path: string = '') {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata('route:method', 'get', descriptor.value);
    Reflect.defineMetadata('route:path', path, descriptor.value);
  };
}
