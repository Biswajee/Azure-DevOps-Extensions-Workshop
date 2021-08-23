# Azure DevOps Extensions Workshop

This repository contains modules for the workshop on building azure devops extensions
to help collegues get started with [azure devops extensions](https://docs.microsoft.com/en-us/azure/devops/extend/overview?view=azure-devops)

## Prerequisites

The workshop assumes that you know and have access to the following resources:

- [x] Javascript/Typescript
- [x] Sinon, Mocha, Chai testing
- [x] Node.js
- [x] GNU Make
- [x] [Azure DevOps Account](https://azure.microsoft.com/en-us/services/devops/)

## Steps

### Setting up workspace

1. Sign in to [Azure DevOps](https://dev.azure.com/) using your personal microsoft account.

2. Create an organization. You can provide any name, make sure it's a unique one.

3. Create 2 projects by clicking the `New Project` button.

    - The first project will hoist your extension-code and release pipeline.

    - The purpose of the second project is to demonstrate that extension tasks are avalable cross-organization.

4. Create a repository in the first project space for your extension code.

5. We'll need to install the necessary [Azure DevOps Extension Tasks](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-developer-tools-build-tasks) by Microsoft installed to build and release azure devops extensions.
    - Install the extension.
      ![Azure DevOps Extension task](./demo-images/azure-devops-ext-task.png)
    - Check if the extension is correctly installed by visiting <OrganizationName> -> Organization settings -> Extensions.
      ![Extension correctly installed](./demo-images/prereq-extension-installed.png)

6. Clone the repository code and delete the current git remote using below steps.
(We will upload the same code to the azure repository).

    ```shell
    # Git clone the repository
    https://github.com/Biswajee/Azure-DevOps-Extensions-Workshop.git

    # Remove the remote url for the cloned repo
    git remote remove origin

    # Add the new remote url from your azure devops extension repository
    git remote add origin https://<OrganizationName>@dev.azure.com/<OrganizationName>/<ProjectName>/_git/<AzureRepositoryName>
    git push -u origin --all
    ```

7. Check whether the code you've pushed got successfully updated in the azure devops respository.

Horray! You've completed the first subtask 🎉🎉

### Setting up the pipeline
