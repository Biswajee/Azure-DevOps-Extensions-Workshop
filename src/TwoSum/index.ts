import * as tl from 'azure-pipelines-task-lib';
import * as path from 'path';

export const inputs = () => ({
  // Get the first number as a task input
  firstNumber: parseInt(tl.getInput('firstNumber', true)!, 10),
  // Get the second number as a task input
  secondNumber: parseInt(tl.getInput('secondNumber', true)!, 10),
});

const run = async (): Promise<void> => {
  tl.setResourcePath(path.join(__dirname, 'task.json'));
  try {
    // Object destructuring property to help
    const { firstNumber, secondNumber } = inputs();

    // Add your logic here...
    // Add the firstNumber and secondNumber variable and store it in the sum variable.
    const sum: number = 0;
    console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);

    tl.setResult(tl.TaskResult.Succeeded, 'Demo task executed successfully');
    return;
  } catch (err: any) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
};

export default run;

// Do not execute the script if NODE_ENV is set to test
// because we'll probably expect to run our test scripts
if (process.env.NODE_ENV !== 'test') {
  run().then();
}
