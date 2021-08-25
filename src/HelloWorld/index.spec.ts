import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import * as sinon from 'sinon';
import run from './index';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

// Sandbox for mocks
let sandbox: sinon.SinonSandbox;

describe('index', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it(`should call console.log() with expected parameter`, async() => {
    // Act
    await run();

    // Assert
    expect(console.log).to.be.calledWith("Hello world!");
  });
});