import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import { ManageTaskPage } from "./ManageTaskPage";

function setup() {
	const props = {
		task: {},
		users: [],
		actions: {
			saveTask: () => {
				return Promise.resolve();
			}
		}
	};

	return mount(<ManageTaskPage {...props} />);
}

describe("ManageTaskPage should", () => {
	it("throw error for empty title", () => {
		const wrapper = setup();
		const saveButton = wrapper.find("input").last();
		expect(saveButton.prop("type")).toBe("submit");
        saveButton.simulate("click");
		expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.");
	});
});
