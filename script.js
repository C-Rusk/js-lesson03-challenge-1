var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
//console.log(weekday);

1;
var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
if (weekday === "Monday") {
  console.log("Let’s get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Almost there!");
} else if (weekday === "Thursday") {
  console.log("So close!");
} else if (weekday === "Friday") {
  console.log("Happy Friday!");
} else {
  console.log("Weekend, yay!");
}
