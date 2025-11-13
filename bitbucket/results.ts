// TODO
// # Only set outs when running in GitHub Actions.
// if [ -n "${GITHUB_OUTPUT+x}" ]; then
//   echo "project=$ProjectName" >>"$GITHUB_OUTPUT"
//   echo "axe_url=$SERVER_URL$AxeURL" >>"$GITHUB_OUTPUT"
//   echo "issue_count=$IssueCount" >>"$GITHUB_OUTPUT"
// fi

import fs from 'fs'

type DevHubResults = {
    last_run_violation_count: number;
    axe_url: string;
    project_name: string;
    last_run_created_at: string;
}

let results = JSON.parse(fs.readFileSync(process.argv[2]).toString()) as DevHubResults
console.log(`Project: ${results.project_name}\nAxe URL: ${process.env.SERVER_URL}${results.axe_url}`)
if (results.last_run_violation_count > 0) {
    console.log(`Found ${results.last_run_violation_count} accessibility violations`)
    process.exit(1)
}
