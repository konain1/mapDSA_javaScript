
let data = new Map([
    ['name','konain'],
    ['add','kishanganj']
])

data.set('school','insan school')

// data.forEach((item)=>{
//     console.log(item)
// })


for (const key of data) {
    console.log(key[1])
}
data.delete('school')

console.log(data)