function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
const start = new Date("2022-11-11");
const end = new Date("2023-01-08");
const dates = getDates(start, end);
// dates.forEach((date) => {
//   console.log(date.toLocaleDateString());
// });

const assignOne = { A: "Off", B: "Morning", C: "Night", D: "Off" };
const assignTwo = { A: "Morning", B: "Off", C: "Off", D: "Night" };
const assignThree = { A: "Night", B: "Off", C: "Off", D: "Morning" };

let count = 1;
let i = 1;
const data = [];
for (let i = 1; i < dates.length; i++) {
  if (count < 3) {
    data.push({ date: dates[i], assign: assignOne });
    count++;
  } else if (count == 4) {
    data.push({ date: dates[i], assign: assignTwo });
    count = 1;
  } else {
    data.push({ date: dates[i], assign: assignTwo });
    count++;
  }
}
console.log(data);
