import fetch from 'node-fetch';

async function* commits(repo) {
  while (true) {
    const res = await fetch(repo);
    const data = await res.json();

    for (const commit of data) {
      yield commit;
    }

    // extract url of next page
    const link = res.headers.get('Link');
    console.log(link);
    repo = /<(.*?)>; rel="next"/.exec(link)?.[1];
    console.log(repo)

    if (repo === undefined) break;
  }
}

async function getCommits(repo) {
  let i = 0;
  for await (const commit of commits(repo)) {
    console.log(commit);
  }
}

getCommits('https://api.github.com/repos/tc39/proposal-temporal/commits');
