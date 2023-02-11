import { createStore } from "vuex";
import { projectModule } from "./projectModule"
import { courseModule } from "./courseModule"
import { userModule } from "./userModule"

export default createStore({
  modules: {
    project: projectModule,
    course: courseModule,
    user: userModule,
  },
});
