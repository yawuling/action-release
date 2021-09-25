# action-release

Github Action to create a release for repository

## Inputs

### Environment Variables

| name | description |
|------|-------------|
| GITHUB_TOKEN | github token |

### Parameters

| name | description | required | default |
|------|-------------|----------|---------|
| name | The name of the release | true | - |
| body | Text describing the contents of the tag | true | - |
| tag_name | The name of the tag | true | - |
| prerelease | true to identify the release as a prerelease. false to identify the release as a full release | false | false |
| draft | true to create a draft (unpublished) release, false to create a published one | false | false |

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'