# Release using GitHub workflows

The workflows directory contains workflows that
will execute on GitHub to build the project similar
to the azure pipelines.

_This tutorial will not be covered during the workshop._

## Getting started with GitHub pipelines

1. Create your personal GitHub account

2. Create your first repository on GitHub and push the code into your new repository.

3. The build and release pipeline is present at .github > workflows > workflow.yaml

4. Create your PAT token by using step 1 & 2 from [here](../README.md#setup-the-marketplace-service-connection).

5. Add the PAT token to the project settings > secrets with name `AZURE_DEVOPS_PAT_TOKEN`.

6. Please update the variables under the `env` attribute as below.

    ```yaml
    env:
      # the name of the azure devops organization where the extension will be shared
      azDoOrganizationName: <organizationName1>,<organizationName2>
      # the patch version of the task will be updated according to githun pipeline run number
      # this is a small hack to update task versions which is nicely handled by the Azure DevOps
      # Extension: https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-developer-tools-build-tasks
      patchVersion: ${{ github.run_number }}
      # the name of the vsix file that will be produced: <publisherId.extensionName-version>.vsix
      vsixFile: <publisherId>.azure-devops-extension-demo-0.0.${{ github.run_number }}.vsix
    ```

7. Push your changes and view the workflow execution under the `Actions` tab.

_easter egg_ 👽
