import { Server } from './server';

function foo(): void {
  console.log([1, 2, 3, 3, 4].includes(3));
  Server.send();
}
console.log(foo.toString());
foo();

function decorate(target) {
  console.log('decorate class')
}

@decorate
class B {

}