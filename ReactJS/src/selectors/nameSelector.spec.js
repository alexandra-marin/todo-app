import expect from "expect";
import { mapNames } from "./nameSelector";

describe("Selector should", () => {
	it("map names", () => {
		const users = [
			{ id: "1", firstName: "Alice", lastName: "A" },
			{ id: "2", firstName: "Bob", lastName: "B" }
        ];
        
		const expected = [
			{ value: "1", text: "Alice" },
			{ value: "2", text: "Bob" }
		];
        
        expect(mapNames(users)).toEqual(expected);
	});
});
