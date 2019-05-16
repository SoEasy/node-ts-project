function decorate(target, propertyKey, descriptor) {
  console.log('decorate static method', propertyKey);
  const originalValue = descriptor.value;
  descriptor.value = function(...args) {
    console.log('In decorator');
    originalValue.call(this, ...args);
  }
}

export class Server {
  @decorate
  static send(): void {
    console.log('Send!');
  }
}
