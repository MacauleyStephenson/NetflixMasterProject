import { magicAdmin } from '../../lib/magic';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
	if (req.method === "POST") {
		try {
			const auth = req.headers.authorization;
			const didToken = auth ? auth.substr(7) : "";
			const metadata = await magicAdmin.users.getMetadataByToken(didToken);
			console.log({ metadata });

			//create jwt
			const token = jwt.sign(
				{
					...metadata,
					iat: Math.floor(Date.now() / 1000),
					exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
					"https://hasura.io/jwt/claims": {
						"x-hasura-allowed-roles": ["user", "admin"],
						"x-hasura-default-role": "user",
						"x-hasura-user-id": `${metadata.issuer}`,
					},
				},
				"thisisasecretthisisasecret1234567"
			);
			console.log({ token });

			//invoke magic
			res.send({ done: true });
		} catch (error) {
			console.error('Something went wrong logging in', error);
			res.status(500).send({ done: false });
		}
	} else {
		res.send({ done: false });
	}
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1hYyIsImlhdCI6MTY1MDg3Mjk5NywiZXhwIjoxNjUxNDc3NzUyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsImFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoibWFjIn19.Z6pMHUsPkGjASYPAixXt4qwPmu5i60c0_i_-ffYDWeA