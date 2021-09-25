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

```yaml
uses: actions/checkout@v2
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
with:
  name: v1.0.0
  tag_name: v1.0.0
  body: this is a release
```