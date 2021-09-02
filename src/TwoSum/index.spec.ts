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

  const testData = [
    {
      firstNumber: "10",
      secondNumber: "2",
      expectedSum: "12",
    },
    {
      firstNumber: "10",
      secondNumber: "7",
      expectedSum: "17",
    },
    {
      firstNumber: "-6",
      secondNumber: "2",
      expectedSum: "-3",
    },
    {
      firstNumber: "-6",
      secondNumber: "0",
      expectedSum: "-6",
    },
    {
      firstNumber: "0",
      secondNumber: "3",
      expectedSum: "3",
    },
    {
      firstNumber: "17",
      secondNumber: "12",
      expectedSum: "29",
    },
  ];

  testData.forEach(({ firstNumber, secondNumber, expectedSum }) => {
    it(`should call console.log() with firstNumber: ${firstNumber}, secondNumber: ${secondNumber} and ${expectedSum}`, async() => {
      // Act
      await run();

      // Assert
      expect(console.log).to.be.calledWith(`The sum of ${firstNumber} and ${secondNumber} is ${expectedSum}`);
    });
  });
});