async function queryHasuraGQL(operationsDoc, operationName, variables) {
	const result = await fetch(
		process.env.NEXT_PUBLIC_HASURA_ADMIN_URL,
		{
			method: "POST",
			headers: {
				"x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
				Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1hYyIsImlhdCI6MTY1MDg3Mjk5NywiZXhwIjoxNjUxNDc3NzUyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsImFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoibm90bWFjIiwieC1oYXN1cmEtb3JnLWlkIjoiMTIzIn19.Zpw9tsO3CyoYpnEH_h-iFbyEsZMW7Fg-9NvuJu5DJqI",
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
    users {
      id
      email
      issuer
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

startFetchMyQuery();

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hYyIsImlhdCI6MTY1MDI4NDAzNSwiZXhwIjoxNjUwODg4OTA3LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsIm1vZCJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6Im5vdG1hYyIsIngtaGFzdXJhLW9yZy1pZCI6IjEyMyJ9fQ.prjFbno-miuZ9ftV_rpSMNz3p5pGmtj7902DWFthgQM


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1hYyIsImlhdCI6MTY1MDg3Mjk5NywiZXhwIjoxNjUxNDc3NzUyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsImFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoibm90bWFjIiwieC1oYXN1cmEtb3JnLWlkIjoiMTIzIn19.Zpw9tsO3CyoYpnEH_h-iFbyEsZMW7Fg-9NvuJu5DJqI