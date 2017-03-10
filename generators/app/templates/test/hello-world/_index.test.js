import expect from 'expect.js';
import { helloWorld, helloWorldAsync } from '../../src/hello-world';

describe('Hello World', () => {
  it('returns Hello World', () => {
    expect(helloWorld()).to.be('Hello World');
  });

  it('returns async Hello world', async () => {
    expect(await helloWorldAsync()).to.be('Async Hello World');
  })
});
