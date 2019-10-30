import "./styles.css";

let vm = new Vue({
  el: "#app",
  data: {
    message: "hello vue in codesandboxe",
    v1: 1,
    v2: 1,
    k1: "class3",
    objStyle: {
      "text-align": "center"
    },
    objStyle2: {
      color: "red",
      fontSize: "40px"
    },
    arrStyle: [],
    style1: "text-align:center",
    rightArrStyle: []
  }
});
vm.arrStyle.push(vm.style1);
vm.rightArrStyle.push(vm.objStyle, vm.objStyle2);
// 失败，对象里的函数能访问到对象里的变量是因为this在函数调用时才存在，函数在js里与代码块的地位不同
// let vm = new Vue({
//   el: "#app",
//   data: {
//     message: "hello vue in codesandboxe",
//     v1: 1,
//     c2: 1,
//     k1: "class3",
//     objStyle: {
//       "text-align": "center"
//     },
//     style1: "text-align:center",
//     arrStyle: [this.test()],
//     methods: {
//       test: function() {
//         return this.style1;
//       }
//     }
//   }
// });

// 失败 暂时没有对象内一个键值对的值引用另外一个键值对的键的办法
// let objTest1 = {
//   a: 1,
//   b: objTest1['a']
// }

//成功，这是因为this在函数被调用时确定
// let objTest2 = {
//   data: {
//     a: 1,
//     b: 2
//   },
//   computed: {
//     sum: function () {
//       return this.a+this.b;
//     }
//   }
// }
