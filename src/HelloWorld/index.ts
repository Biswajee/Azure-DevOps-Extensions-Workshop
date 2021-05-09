import * as tl from 'azure-pipelines-task-lib';

const run = async () => {
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

run();