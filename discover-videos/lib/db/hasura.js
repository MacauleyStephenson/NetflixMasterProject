async function queryHasuraGQL(operationsDoc, operationName, variables) {
	const result = await fetch(
		process.env.NEXT_PUBLIC_HASURA_ADMIN_URL,
		{
			method: "POST",
			headers: {
				Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hYyIsImlhdCI6MTY1MDI4NDAzNSwiZXhwIjoxNjUwODg4OTA3LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsIm1vZCJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6Im5vdG1hYyIsIngtaGFzdXJhLW9yZy1pZCI6IjEyMyJ9fQ.prjFbno-miuZ9ftV_rpSMNz3p5pGmtj7902DWFthgQM",
			},
			body: JSON.stringify({
				query: operationsDoc,
				variables: variables,
				operationName: operationName,
			}),
		});
	return await result.json();
}


const operationsDoc = `
		query MyQuery {
			users{
				email
				id
				issuer
				publicAddress
			}
		}
		`;
function fetchMyQuery() {
	return queryHasuraGQL(operationsDoc, "MyQuery", {});
}





export async function startFetchMyQuery() {
	const { errors, data } = await fetchMyQuery();

	if (errors) {
		console.error(errors)
	}

	console.log(data)
}

