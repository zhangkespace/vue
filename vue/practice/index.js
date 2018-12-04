Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    firstName: "张三",
    lastName: "李四",
    message: "hellow",
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ],
    rawHtml : "<span style='color: red;'>这段文字是红色的</span>",
    btnDisabled: true
  },
  computed: {
    fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      console.log(newValue);
      var names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1];
    }
  }
  }
})

setTimeout(function() {
  app7.fullName = "王五";
},1000)

console.log(app7.groceryList);

var branch = "dev";