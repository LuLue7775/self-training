const arr = [
    { id: 'item1', name: 'TV', price: 13500 },
    { id: 'item2', name: 'washing machine', price: 8200 },
    { id: 'item3', name: 'laptop', price: 25000 },
];

const arr2 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];


const totalPrice = arr.filter(item => item.price > 10000)
                      .map(item => item.price)
                    //   .reduce((prev, curr) => prev + curr, 0);


const checked = [v, v, v];
const onChanged = item => {
    if (checked.includes(item)) {
        const itemIndex = checked.indexOf(item)
        checked.splice(itemIndex, 1)
    } else {
        checked.push(item)
    }
}
