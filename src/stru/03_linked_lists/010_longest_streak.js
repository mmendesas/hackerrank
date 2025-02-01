class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

// iterative
const longestStreak = (head) => {
  let current = head;
  let maxStreak = 0;
  let currentStreak = 0;

  let prev = null;

  while (current !== null) {
    if (current.val === prev) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    prev = current.val;
    current = current.next;
  }

  return maxStreak;
};

const longestStreakArr = (arr = [5, 5, 7, 7, 7, 6]) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let prev = null;

  for (let item of arr) {
    if (item === prev) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    console.log(">>>>> ", item, prev, maxStreak, currentStreak);

    prev = item;
  }

  return maxStreak;
};

console.log(">>>>ogrsa", longestStreak(a));

console.log("asdf", longestStreakArr());
