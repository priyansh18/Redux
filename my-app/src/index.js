import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignToUser,
  getBugByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import { apiCallBegan,apiCallFailed,apiCallSuccess } from "./store/api";
import {loadBugs} from './store/bugs'

const store = configureStore();

store.subscribe(() => {
  console.log("Store Changed");
});

store.dispatch(loadBugs());
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));

// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());

const bugs = getBugByUser(1)(store.getState());
console.log(bugs);
