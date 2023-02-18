var sqlite3 = require("sqlite3").verbose();
// var md5 = require("md5");
//import sqlite3 from "sqlite3";
//sqlite3.verbose();
//Import sqlite3 from "sqlite3"
//Import sqlite3 from "sqlite3"
//Import md5 from "md5"

const DBSOURCE = "./database.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run("PRAGMA foreign_keys = ON");
    db.run(
      `CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author text,
            projectname text, 
            projectDescription text, 
            autosave text,
            private text 
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table projects");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO projects (author, projectname, projectDescription, autosave, private) VALUES (?,?,?,?,?)";
          db.run(insert, [
            "Anton",
            "FirstProject",
            "Some text",
            "false",
            "false",
          ]);
          db.run(insert, [
            "Sergey",
            "SecondProject",
            "Some text",
            "false",
            "false",
          ]);
          db.run(insert, [
            "Anton",
            "ThirdProject",
            "Some text",
            "false",
            "false",
          ]);
          console.log("Created projects table");
        }
      }
    );
    db.run(
      `CREATE TABLE courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            coursename text,
            courseDescription text, 
            pageNumbers integer
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table courses");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO courses (coursename, courseDescription, pageNumbers) VALUES (?,?,?)";
          db.run(insert, ["SQL основы", "Текст какой-то", 4]);
          db.run(insert, ["SQL экспертиза", "Текст какой-то", 3]);
          console.log("Created projects table");
        }
      }
    );
    db.run(
      `CREATE TABLE course_id_1 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            taskName text,
            taskDescription text,
            rightsqlquery text
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table courses");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO course_id_1 (taskName, taskDescription, rightsqlquery) VALUES (?,?,?)";

          setTimeout(
            () =>
              db.run(insert, [
                "Введение в запросы",
                "course_id_1_1",
                "select * from humans",
              ]),
            1000
          );
          setTimeout(
            () =>
              db.run(insert, [
                "Основы запросов",
                "course_id_1_2",
                "select name from humans",
              ]),
            1000
          );
          setTimeout(
            () =>
              db.run(insert, [
                "Select",
                "course_id_1_3",
                "select * from humans where age = 19",
              ]),
            1000
          );
          setTimeout(
            () =>
              db.run(insert, [
                "Where",
                "course_id_1_4",
                "select name from humans where age = 19",
              ]),
            1000
          );
          console.log("Created projects table");
        }
      }
    );

    db.run(
      `CREATE TABLE course_id_2 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            taskName text,
            taskDescription text,
            rightsqlquery text
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table courses");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO course_id_2 (taskName, taskDescription, rightsqlquery) VALUES (?,?,?)";
          setTimeout(
            () =>
              db.run(insert, [
                "Введение в создание таблицы",
                "course_id_2_1",
                "select * from humans",
              ]),
            1000
          );
          setTimeout(
            () =>
              db.run(insert, [
                "Основы создание таблицы",
                "course_id_2_2",
                "select * from humans",
              ]),
            1000
          );
          setTimeout(
            () =>
              db.run(insert, [
                "CREATE TABLE",
                "course_id_2_3",
                "select * from humans",
              ]),
            1000
          );
          console.log("Created projects table");
        }
      }
    );

    db.run(
      `CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text UNIQUE,
            email text, 
            password text
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table courses");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO users (username, email, password) VALUES (?,?,?)";
          db.run(insert, ["Anton", "anton2@gmail.com", "123456"]);
          db.run(insert, ["Sergey", "sergey@gmail.com", "bjhei23"]);
          db.run(insert, ["Sasha", "alexandra@mail.ru", "JweM22_eE4"]);
          console.log("Created users table");
        }
      }
    );
    db.run(
      `CREATE TABLE humans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sex text,
            name text,
            surname text, 
            age text
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log("no Created table courses");
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO humans (sex, name, surname, age) VALUES (?,?,?,?)";
          db.run(insert, ["M", "Anton", "Puchkov", "19"]);
          db.run(insert, ["F", "Alexandra", "Zlatova", "20"]);
          db.run(insert, ["F", "Maria", "Alfimenko", "19"]);
          db.run(insert, ["M", "Vladimir", "Vasenin", "20"]);
          db.run(insert, ["F", "Elena", "Lemeshko", "19"]);
          console.log("Created users table");
        }
      }
    );
  }
});

function addProject(name, author, callback) {
  console.log(1);
  var sql =
    "INSERT INTO projects (author, projectname, projectDescription, autosave, private) VALUES (?,?,?,?,?)";
  var params = [author, name, "", "false", "false"];
  console.log("row is added");
  db.run(sql, params, function (error, project) {
    callback(error, project);
  });
}

function deleteProject(id, callback) {
  var sql = `
  DELETE FROM 
  projects 
  WHERE 
  id = ?;`;
  db.run(sql, id, function (error) {
    callback(error);
  });
}

function updateProject(id, autosave, private__, projectDescription, callback) {
  var sql = `
    UPDATE projects SET 
       autosave=?, 
       private=?, 
       projectDescription=? 
    WHERE 
       id=?`;
  var private_;
  var autosave_;
  if (autosave) {
    console.log("true");
    autosave_ = "true";
  } else {
    console.log("false");
    autosave_ = "false";
  }
  if (private__) {
    console.log("true");
    private_ = "true";
  } else {
    console.log("false");
    private_ = "false";
  }
  //console.log("ПРОВЕРКА");
  var params = [autosave_, private_, projectDescription, id];

  db.run(sql, params, function (error) {
    callback(error);
  });
}

function updateProjectCode(id, SQLscript, SQLquery, callback) {
  var sql = `
  UPDATE projects SET 
     SQLScript=?,
     SQLQuery=?  
  WHERE 
     id=?`;
  var params = [SQLscript, SQLquery, id];
  db.run(sql, params, (error) => {
    callback(error);
  });
}

function runCode(codetext, callback) {
  db.all(codetext, [], function (error, humans) {
    callback(error, humans);
  });
}

function dataBase(humans, { id, sex, name, surname, age }, callback) {
  humans.forEach((human) => {
    if (human.id != undefined) {
      id = 1;
      console.log(human.id);
    }
    if (human.sex != undefined) {
      sex = 1;
      console.log(human.sex);
    }
    if (human.name != undefined) {
      name = 1;
      console.log(human.name);
    }
    if (human.surname != undefined) {
      surname = 1;
      console.log(human.surname);
    }
    if (human.age != undefined) {
      age = 1;
      console.log(human.age);
    }
  });
  var dialogue = { id, sex, name, surname, age };
  callback(dialogue);
}

function addUser(login, email, password, callback) {
  var sql = `INSERT INTO users (username, email, password) VALUES (?,?,?)`;
  var params = [login, email, password];
  db.run(sql, params, function (error) {
    callback(error);
  });
}

function selectCourseById(id, callback) {
  var sql = `
  SELECT
   * FROM courses 
  WHERE 
  id = ?
  `;
  var params = [id];
  db.get(sql, params, function (error, course) {
    callback(error, course);
  });
}

function selectTaskBydPage(id, page, callback) {
  var sql =
    `
  SELECT * FROM 
  course_id_` +
    id +
    `
  WHERE
  id = ?
  `;
  var params = page;
  db.get(sql, params, function (error, coursePage) {
    callback(error, coursePage);
  });
}

function selectProjectById(id, callback) {
  var sql = `
  SELECT
   * FROM projects 
  WHERE 
  id = ?
  `;
  var params = [id];
  db.get(sql, params, function (error, project) {
    callback(error, project);
  });
}

function selectAllProjects(callback) {
  var sql = `
  SELECT * FROM
  projects
  `;
  db.all(sql, [], function (error, projects) {
    callback(error, projects);
  });
}

function selectAllCourses(callback) {
  var sql = `
  SELECT * FROM
  courses
  `;
  db.all(sql, [], function (error, courses) {
    callback(error, courses);
  });
}

function selectAllHumans(callback) {
  var sql = `
  SELECT * FROM
  humans
  `;
  db.all(sql, [], function (error, humans) {
    callback(error, humans);
  });
}

function selectProjectByAuthor(author, callback) {
  var sql = `
  SELECT * FROM 
  projects
  WHERE 
  author = ?
  `;
  var params = [author];
  db.all(sql, params, function (error, projects) {
    callback(error, projects);
  });
}

function selectUserByLogin(login, password, callback) {
  var sql = `
  SELECT *
  FROM users
  WHERE username=? and password=?`;
  var params = [login, password];
  db.get(sql, params, function (error, user) {
    callback(error, user);
  });
}

function selectUserByEmail(email, password, callback) {
  var sql = `
  SELECT *
  FROM users
  WHERE email=? and password=?`;
  var params = [email, password];
  db.get(sql, params, function (error, user) {
    callback(error, user);
  });
}

//exports.addProject = this.addProject

// exports.addProject = function (name, author, callback) {
//   console.log(1);
//   var sql="INSERT INTO projects (author, projectname, projectDescription, autosave, private) VALUES (?,?,?,?,?)";
//   var params=
//   [
//     author,
//     name,
//     '',
//     'false',
//     'false',
//   ];
//   console.log('row is added')
//   db.run(sql, params, function(error, project) {
//     callback(error, project)
//   })
// };

// exports.deleteProject = function (id, callback) {

//   var sql = `
//   DELETE FROM
//   projects
//   WHERE
//   id = ?;`;
//   db.run(sql, id, function (error) {
//     callback(error)
//   });

// };

// exports.updateProject = function (
//   id,
//   autosave,
//   private,
//   projectDescription,
//   callback
// ) {
//   var sql = `
//   UPDATE projects SET
//      autosave=?,
//      private=?,
//      projectDescription=?
//   WHERE
//      id=?`;
//   var private_;
//   var autosave_;
//   if (autosave) {
//     console.log("true");
//     autosave_ = "true";
//   } else {
//     console.log("false");
//     autosave_ = "false";
//   }
//   if (private) {
//     console.log("true");
//     private_ = "true";
//   } else {
//     console.log("false");
//     private_ = "false";
//   }
//   //console.log("ПРОВЕРКА");
//   var params = [autosave_, private_, projectDescription, id];

//   db.run(sql, params, (err) => {
//      callback(error)
//   });
// };

// exports.updateProjectCode = function (id, SQLscript, SQLquery, callback) {
//   var sql = `
//   UPDATE projects SET
//      SQLScript=?,
//      SQLQuery=?
//   WHERE
//      id=?`;
//   var params=[SQLscript, SQLquery, id]
//   db.run(sql, params, (err) => {
//     callback(error)
//  });
// };

// exports.addUser = function (login, email, password, callback) {
//   var sql = `INSERT INTO users (username, email, password) VALUES (?,?,?)`;
//   var params = [login, email, password];
//   db.run(sql, params, function(error) {
//       callback(error, this.lastID);
//     }
//   );
// };

export default {
  db,
  addProject,
  deleteProject,
  updateProject,
  updateProjectCode,
  runCode,
  addUser,
  selectCourseById,
  selectTaskBydPage,
  selectProjectById,
  selectAllProjects,
  selectAllCourses,
  selectAllHumans,
  selectProjectByAuthor,
  dataBase,
  selectUserByLogin,
  selectUserByEmail,
};
