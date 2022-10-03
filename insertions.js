intersection(
  [
    [8, 12],
    [17, 22],
  ],
  [
    [5, 11],
    [14, 18],
    [20, 23],
  ]
); // [[8, 11], [17, 18], [20, 22]]

intersection(
  [
    [9, 16],
    [18, 21],
  ],
  [
    [10, 11],
    [13, 14],
    [21, 22],
  ]
); // [[10, 14]]

function intersection(user1, user2) {
  const result = [];
  for (let i = 0, j = 0; i < user1.length && j < user2.length; ) {
    const maxLeft = Math.max(user1[i][0], user2[j][0]);
    const minRight = Math.min(user1[i][1], user2[j][1]);

    if (maxLeft < minRight) {
      result.push([maxLeft, minRight]);
    }

    user1[i][1] < user2[j][1] ? ++i : ++j;
  }
  console.log(result);
  return result;
}

function intersection1(user1, user2) {
  const result = [];
  for (let i = 0, j = 0; i < user1.length && j < user2.length; ) {
    const [a, b] = user1[i];
    const [c, d] = user2[j];

    if (a < d && c < b) {
      const arr = [a > c ? a : c, b > d ? d : b];
      result.push(arr);
    }

    if (b < d) {
      i++;
    }

    if (d < b) {
      j++;
    }
  }
  return result;
}
