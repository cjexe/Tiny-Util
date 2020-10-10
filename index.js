// 1维数组转2维数组

// GaoML 深渊 问题
function calculateGroup(source,n) {
    debugger
    let groupCount = source.length % n === 0 ? source.length / n : Math.floor(source.length / n + 1)
    let currentList = []
    for (let i = 0; i < groupCount; i++) {
        currentList[i] = source.slice(i * n, i * n + n)
    }
    return currentList
}
// mock原始数据
let rankList = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}, {a: 6}, {a: 7}, {a: 8}, {a: 9}, {a: 10}, {a: 11}, {a: 12},]


let groupCount = calculateGroup(rankList,10)

for (let j = 0; j < groupCount.length; j++) {
    console.log(groupCount[j])
    groupCount[j] = calculateGroup(groupCount[j],5)
    console.log(groupCount[j])
}

console.log(groupCount)