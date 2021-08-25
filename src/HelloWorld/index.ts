import * as tl from 'azure-pipelines-task-lib';

const run = async (): Promise<void> => {
  try {
    // The simple line below prints hello world on pipeline
    console.log("Hello world!");
    
    tl.setResult(tl.TaskResult.Succeeded, 'Demo extension executed successfully');
    return;
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

export default run;

// Do not execute the script if NODE_ENV is set to test
// because we'll probably expect to run our test scripts
if (process.env.NODE_ENV !== 'test') {
  run().then();
}