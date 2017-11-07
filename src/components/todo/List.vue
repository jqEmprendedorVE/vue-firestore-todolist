<template>
    <div>
      <div v-for="task in tasks">
        <item 
          :task='task'>
         </item>
      </div>    
    </div>
</template>
<script>
import item from './Item'
export default {
  name: 'List',
  components: {
    item
  },
  data () {
    return {
      tasks: []
    }
  },
  created () {
    let tasks = this.$firebase.firestore().collection('tasks')

    tasks.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      this.tasks = []
      setTimeout(() => {
        querySnapshot.forEach(doc => {
          let task = doc.data()
          task.taskId = doc.id
          this.tasks.unshift(task)
        })
      }, 1)
    })
  }
}
</script>

