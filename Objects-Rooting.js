
const judgeVegetable = function(vegetables, metric) {
  let value = 0;
  let submitter = '';

  for (let i = 0; i < vegetables.length; i++) {
    if (value < vegetables[i][metric]) {
      value = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
};

//Input Cases #######################################
const metric = 'redness';
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

console.log(judgeVegetable(vegetables, metric));