import chai, { expect } from 'chai';
import * as tl from 'azure-pipelines-task-lib';
import run from './index';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('index', () => {
  it(`should call console.log() with expected parameter`, async() => {
    // Act
    await run();

    // Assert
    expect(console.log).to.be.calledWith("Hello world!");
  });
});