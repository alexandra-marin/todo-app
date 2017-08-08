import delay from "./delay";

const users = [
	{
		id: "1",
		firstName: "Alice",
		lastName: "A"
	},
	{
		id: "2",
		firstName: "Bob",
		lastName: "B"
	}
];

const generateId = user => {
	return user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase();
};

class UserApi {
	static getAllUsers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], users));
			}, delay);
		});
	}

	static saveUser(author) {
		author = Object.assign({}, author); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minAuthorNameLength = 3;
				if (author.firstName.length < minAuthorNameLength) {
					reject(
						`First Name must be at least ${minAuthorNameLength} characters.`
					);
				}

				if (author.lastName.length < minAuthorNameLength) {
					reject(
						`Last Name must be at least ${minAuthorNameLength} characters.`
					);
				}

				if (author.id) {
					const existingAuthorIndex = users.findIndex(
						a => a.id == author.id
					);
					users.splice(existingAuthorIndex, 1, author);
				} else {
					author.id = generateId(author);
					users.push(author);
				}

				resolve(author);
			}, delay);
		});
	}

	static deleteUser(authorId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfAuthorToDelete = users.findIndex(author => {
					author.id == authorId;
				});
				users.splice(indexOfAuthorToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default UserApi;
