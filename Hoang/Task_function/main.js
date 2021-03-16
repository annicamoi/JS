(function () {
  let firstTime, secondTime;
  window.addEventListener('DOMContentLoaded', (event) => {
      firstTime = new Date().getTime();
      console.log('DOM Content is finally loaded', firstTime);
      console.log('time difference was: ', (secondTime - firstTime) / 1000)
      const users = getUsers(); // unsorted array of user object

      document.getElementById('sort-btn').addEventListener('click', event => {
          const sortedUsers = sortUsers(users);
          console.log(sortedUsers)
          renderTable(sortedUsers);
      })

      const users = getUsers();
      users.forEach(addUser)
      renderTable(users)

      const oldestPerson = getOldest(users);
      console.log('The oldest person is ', oldestPerson.name, oldestPerson.age)
@@ -17,39 +20,61 @@
  console.log('hello from anonymous fn', secondTime)
})()

function sortUsers(userObjs) {
  for (let i = 0; i < userObjs.length - 1; i++) {
      for (let j = i + 1; j < userObjs.length; j++) {
          if (userObjs[i].age > userObjs[j].age) {
              let temp = userObjs[j];
              userObjs[j] = userObjs[i];
              userObjs[i] = temp;
          }
      }
  }

  return userObjs;
}

function renderTable(userObjs) {
  document.getElementById('table-content').innerHTML = ''; // clear the table body content
  // iterate through the userObjs array, for each of them call the addUser
  userObjs.forEach(user => addUser(user));
}

function getOldest(userObjs) {
  let oldest = userObjs[0];

  for (let i = 1; i < userObjs.length; i++) {
      if (userObjs[i].age > oldest.age) {
      if (userObjs[i].age < oldest.age) {
          oldest = userObjs[i]
      }
  }

  return oldest;
}

// expect an array of userObj as input
// add a new row to the table for each user object
function addUser(userObj) {
  let newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${userObj.studentNo}</td>
      <td>${userObj.name}</td>
      <td>${userObj.age}</td>
      <td>${userObj.studentNo > 0}</td>
  `;
  document.getElementById('table-content').appendChild(newRow);
}

function getUsers() {
  return [{
      studentNo: -1,
      name: 'Hagrid',
      age: 65
  },{
      studentNo: 123,
      name: 'harry',
      age: 15
  },
  {
      studentNo: 234,
      name: 'Ron',
      age: 16
  },
  {
      studentNo: 135,
      name: 'Hermione',
@@ -61,8 +86,8 @@ function getUsers() {
      age: 55
  },
  {
      studentNo: -1,
      name: 'Hagrid',
      age: 65
      studentNo: 234,
      name: 'Ron',
      age: 16
  }];
} 