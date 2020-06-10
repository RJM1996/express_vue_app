// // let x
// // const y = 0
// // console.log(x, y)

// // var a = 100
// // x = 200
// // console.log(Object.getOwnPropertyDescriptor(global, a)) // 浏览器执行的时候global改为globalThis

// let objA = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// let objB = objA
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// objB.b = 4
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// let objC = objB
// console.log(JSON.stringify(objC))
// objC.b = 5
// console.log(JSON.stringify(objA))
// console.log(JSON.stringify(objB))
// console.log(JSON.stringify(objC))

let result = '{"taskId":1152921504735848759,"status":"CREATED","progress":0.0,"success":true}'
// JSON.parse(result) 不为19位数补上双引号，直接parse时，精度丢失，结果如下：
// { 
//  taskId: 1152921504735848700,
//  status: 'CREATED',
//  progress: 0,
//  success: true 
// }
const taskId = result.match(/[0-9]{19}/)[0] // 正则获取19位数字的值
result = result.replace(taskId, `"${taskId}"`) // 补上双引号
const data = JSON.parse(result) 
console.log(data)
// { 
//  taskId: '1152921504735848759', // 解析出来之后是字符串，因此没有丢失精度
//  status: 'CREATED',
//  progress: 0,
//  success: true 
// }
