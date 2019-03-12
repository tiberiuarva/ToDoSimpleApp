let app = new Vue({
  el: '#app',
  data: {
    todolist: []
  },
  methods: {
    addNew: function(event) {
      this.todolist.push({
        task: event.target.value
      })
      event.target.value = ''
      this.save()
    },
    remove: function(t) {
      this.todolist = this.todolist.filter(i => i != t)
      this.save()
    },
    load: function() {
      let data = localStorage.getItem('saved')
      if (data) {
        this.todolist = JSON.parse(data)
      }
    },
    save: function() {
      let data = JSON.stringify(this.todolist)
      localStorage.setItem('saved', data)
    }
  },
  created: function() {
    this.load()
  }
})
