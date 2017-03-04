import expect from 'expect.js';
import helloWorld from '../../src/hello-world';


describe('Hello World', () => {
  it('returns Hello World', () => {
    expect(helloWorld()).to.be('Hello World');
  });
});
