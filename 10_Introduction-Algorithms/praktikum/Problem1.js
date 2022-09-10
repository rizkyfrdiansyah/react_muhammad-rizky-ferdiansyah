let stats = [1.5, 2.56, 5.1, 12.33];

stats = stats.map((stat) => Math.round(stat));

console.log(stats);

let temp = [];
for (let i = 0; i < stats.length; i++) {
  temp.push(Math.round(stats[i]));
}
console.log(temp);
