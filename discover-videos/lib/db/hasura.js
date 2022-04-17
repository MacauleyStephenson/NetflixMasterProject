/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
	const result = await fetch(
		"https://noted-coyote-73.hasura.app/v1/graphql",
		{
			method: "POST",
			headers: {
				"x-hasura-admin-secret": "VzqUeo3W1N2LJHpOs2pI6FF9JxTqkKqNRYMIQ1uK9p0ta5tWclWBg9FheQxpwpRH",
			},
			body: JSON.stringify({
				query: operationsDoc,
				variables: variables,
				operationName: operationName
			})
		}
	);

	return await result.json();
}

const operationsDoc = `
	query MyQuery {
	  users {
		id
		email
		issuer
		publicAddress
	  }
	  stats {
		id
		userId
		videoId
		watched
		favourited
	  }
	}

	mutation MyMutation {
	  insert_stats(objects: {favourited: 1, id: 1, userId: "mac", videoId: "s9rtAsd-b54", watched: true}) {
		affected_rows
	  }
	}
  `;

function fetchMyQuery() {
	return fetchGraphQL(
		operationsDoc,
		"MyQuery",
		{}
	);
}

function executeMyMutation() {
	return fetchGraphQL(
		operationsDoc,
		"MyMutation",
		{}
	);
}

export async function startFetchMyQuery() {
	const { errors, data } = await fetchMyQuery();

	if (errors) {
		// handle those errors like a pro
		console.error(errors);
	}

	// do something great with this precious data
	console.log(data);
}

startFetchMyQuery();

async function startExecuteMyMutation() {
	const { errors, data } = await executeMyMutation();

	if (errors) {
		// handle those errors like a pro
		console.error(errors);
	}

	// do something great with this precious data
	console.log(data);
}

startExecuteMyMutation();