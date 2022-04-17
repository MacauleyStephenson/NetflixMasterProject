async function queryHasuraGQL(operationsDoc, operationName, variables) {
	const result = await fetch(
		process.env.HASURA_ADMIN_URL,
		{
			method: "POST",
			headers: {
				"x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
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
	return queryHasuraGQL(
		operationsDoc,
		"MyQuery",
		{}
	);
}

function executeMyMutation() {
	return queryHasuraGQL(
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