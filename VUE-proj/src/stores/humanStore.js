import { defineStore } from "pinia";
//import data from "../databases/database.js";

export const useHumanStore = defineStore("humanStore", {
  state: () => ({
    humans: [
      { id: 1, sex: "M", name: "Anton", surname: "Puchkov", age: 19 },
      { id: 2, sex: "F", name: "Alexandra", surname: "Zlatova", age: 20 },
      { id: 3, sex: "F", name: "Maria", surname: "Alfimenko", age: 19 },
      { id: 4, sex: "M", name: "Vladimir", surname: "Vasenin", age: 20 },
      { id: 5, sex: "F", name: "Elena", surname: "Lemeshko", age: 19 },
    ],
    humans_res: [
      { id: 1, sex: "M", name: "Anton", surname: "Puchkov", age: 19 },
      { id: 2, sex: "F", name: "Alexandra", surname: "Zlatova", age: 20 },
      { id: 3, sex: "F", name: "Maria", surname: "Alfimenko", age: 19 },
      { id: 4, sex: "M", name: "Vladimir", surname: "Vasenin", age: 20 },
      { id: 5, sex: "F", name: "Elena", surname: "Lemeshko", age: 19 },
    ],
    error: undefined,
  }),
  actions: {
    runCode(sql) {
      /*
      data.runCode(sql, function (error, humans) {
        if (error) {
          this.error = error;
        } else {
          this.humans_res = humans;
        }
      }); */
      console.log(sql);
    },
  },
});

/*
db.run(insert, ["M", "Anton", "Puchkov", "19"]);
db.run(insert, ["F", "Alexandra", "Zlatova", "20"]);
db.run(insert, ["F", "Maria", "Alfimenko", "19"]);
db.run(insert, ["M", "Vladimir", "Vasenin", "20"]);
db.run(insert, ["F", "Elena", "Lemeshko", "19"]);
*/
