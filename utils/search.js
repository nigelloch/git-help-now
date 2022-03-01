function searchFunction(s) {
  filter = words.filter((str) => {
    return str.toLowerCase().indexOf(s.toLowerCase()) >= 0;
  });
  console.log(filter);
  alert(s);
}

words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
