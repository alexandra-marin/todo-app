export function mapNames(namesList) {
	return namesList.map(person => {
		return {
			value: person.id,
			text: person.firstName
		};
	});
}
