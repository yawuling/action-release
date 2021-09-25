const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
  const name = core.getInput('name');
  const body = core.getInput('body');
  const tagName = core.getInput('tag_name');
  const prerelease = core.getInput('prerelease') || false;
  const draft = core.getInput('draft') || false;

  const githubToken = process.env['GITHUB_TOKEN'];
  const octokit = github.getOctokit(githubToken);
  const context = github.context;
  const { owner, repo } = context.repo;

  await octokit.rest.repos.createRelease({
    owner,
    repo,
    name,
    body,
    tag_name: tagName,
    prerelease,
    draft,
  });;
}

try {
  run();
} catch (e) {
  console.error(e);
  process.exit(1);
}
