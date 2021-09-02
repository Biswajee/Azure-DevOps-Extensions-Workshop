import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import * as sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import * as tl from 'azure-pipelines-task-lib';
import run, { inputs } from './index';
import * as index from './index';

chai.use(sinonChai);
chai.use(chaiAsPromised);

// Sandbox for mocks
let sandbox: sinon.SinonSandbox;

describe('index', () => {
  let getInputMock: sinon.SinonStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    getInputMock = sandbox.stub(tl, 'getInput');
  });

  afterEach(() => {
    sandbox.restore();
  });

  const testInputs = [
    {
      firstNumber: 10,
      secondNumber: 12,
    },
    {
      firstNumber: 3,
      secondNumber: 5,
    },
    {
      firstNumber: 1,
      secondNumber: -1,
    },
  ];

  testInputs.forEach((testInput) => {
    it(`returns expected config: ${JSON.stringify(testInput)}`, () => {
      // Arrange
      getInputMock
        .withArgs('firstNumber')
        .returns(testInput.firstNumber)
        .withArgs('secondNumber')
        .returns(testInput.secondNumber);

      // Act
      const result = inputs();

      // Assert
      expect(result).to.eql(testInput);
    });
  });
});

describe('run', () => {

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  const testData = [
    {
      firstNumber: 10,
      secondNumber: 2,
      expectedSum: 12,
    },
    {
      firstNumber: 10,
      secondNumber: 7,
      expectedSum: 17,
    },
    {
      firstNumber: -6,
      secondNumber: 2,
      expectedSum: -4,
    },
    {
      firstNumber: -6,
      secondNumber: 0,
      expectedSum: -6,
    },
    {
      firstNumber: 0,
      secondNumber: 3,
      expectedSum: 3,
    },
    {
      firstNumber: 17,
      secondNumber: 12,
      expectedSum: 29,
    },
  ];

  testData.forEach(({ firstNumber, secondNumber, expectedSum }) => {
    it(`should call console.log() with firstNumber: ${firstNumber}, secondNumber: ${secondNumber} and ${expectedSum}`, async () => {
      // Arrange
      sandbox.stub(index, 'inputs').returns({
        firstNumber,
        secondNumber,
      });

      // Act
      run();

      // Assert
      expect(console.log).to.be.calledWith(
        `The sum of ${firstNumber} and ${secondNumber} is ${expectedSum}`,
      );
    });
  });
});
