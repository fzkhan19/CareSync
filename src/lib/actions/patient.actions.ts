"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
	try {
		// Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
		const newuser = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			undefined,
			user.name,
		);


		return newuser;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		// Check existing user
		console.log("ERROR::::", error);
		if (error && error?.code === 409) {
			const existingUser = await users.list([
				Query.equal("email", [user.email]),
			]);

			return existingUser.users[0];
		}
		console.log("An error occurred while creating a new user:", error);
	}
};
