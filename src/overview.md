# Azure DevOps Extension Workshop

Hi Enthusiast,

This is the place where you can describe what are the tasks that are being offered
by your Azure DevOps Extension and this page will be visible to people browsing through
extensions in the [Azure DevOps Marketplace](https://marketplace.visualstudio.com/).

We can add small documentation on how to use the tasks as below:

## HelloWorld

This task displays a `Hello World!` message in the pipeline!

Usage:

```yaml
steps:
  - task: HelloWorld@0
```

## TwoSum

This task takes in two numbers as task parameter and outputs sum of two numbers.

Usage:

```yaml
steps:
  - task: TwoSum@0
    inputs:
      first_number: 3
      second_number: 7
```
