import delay from "./delay";

const tasks = [
	{
		id: "1",
		title: "Task #1",
		watchHref: "http://crossplatform.io",
		authorId: "1",
		date: "01/01/2017",
		importance: "urgent"
	},
	{
		id: "2",
		title: "Task #3",
		watchHref: "http://crossplatform.io",
		authorId: "3",
		date: "05/01/2017",
		importance: "normal"
	},
	{
		id: "3",
		title: "Task #3",
		watchHref: "http://crossplatform.io",
		authorId: "2",
		date: "01/02/2017",
		importance: "urgent"
	}
];

let id = 3;

//This would be performed on the server in a real app. Just stubbing in.
const generateId = task => {
	return ++id;
};

class CourseApi {
	static getAllTasks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], tasks));
			}, delay);
		});
	}

	static saveTask(task) {
		task = Object.assign({}, task); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minTitleLength = 1;
				if (task.title.length < minTitleLength) {
					reject(
						`Title must be at least ${minTitleLength} characters.`
					);
				}

				if (task.id) {
					const existingCourseIndex = tasks.findIndex(
						a => a.id == task.id
					);
					tasks.splice(existingCourseIndex, 1, task);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new courses in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					task.id = generateId(task);
					task.watchHref = `http://crossplatform.io/${task.id}`;
					tasks.push(task);
				}

				resolve(task);
			}, delay);
		});
	}

	static deleteTask(courseId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexToDelete = tasks.findIndex(course => {
					course.id == courseId;
				});
				tasks.splice(indexToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default CourseApi;
