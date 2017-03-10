export function helloWorld() {
  return 'Hello World';
}

export function helloWorldAsync() {
  return Promise.resolve(`Async ${helloWorld()}`);
}

export default helloWorld;
