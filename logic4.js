// delhi :
//   narela
//   narela
//   narela
// Punjab :
//   narela
//   narela
//   narela:
// Holambi
// Holambi

// yesa output aana chaiye

const arr = [
  {
    name: "delhi",
    value: [
      {
        name: "narela",
        value: [],
      },
      {
        name: "holambhi",
        value: [],
      },
    ],
  },
  {
    name: "Punjab",
    value: [
      {
        name: "Ludhiyana",
        value: [],
      },
      {
        name: "holambhi",
        value: [
          {
            name: "alag",
            value: [
              {
                name: "Ludhiyana",
                value: [],
              },
              {
                name: "dnakaur",
                value: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

function recursionFun(arr) {
  const values = arr;
  for (let val of values) {
    if (Array.isArray(val.value)) {
      console.log(val.name);
      recursionFun(val.value);
    }
  }
}

recursionFun(arr);
