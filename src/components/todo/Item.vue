<template>
  <div>
    <br>
    <div class="card">
        <div class="card-header">
            <div 
              v-if="!editTask" 
              :class=" task.completed ? 'tachado text-gray' : '' " 
              class="card-title h5"
              @click="showInputTask ()">
                {{ task.title }}
            </div>
            <input 
              ref="inputTitleTask" 
              v-if="editTask" 
              v-model="task.title" 
              class="form-input" 
              type="text" 
              placeholder="Modificar tarea"
              @blur="updateTitleTask (db, task.taskId)">
        </div>
        <div class="card-footer">
            <button 
              class="btn btn-primary circle"
              @click="showInputTask ()">
                <i class="icon icon-edit"></i>
            </button>
            <button
              v-if="!task.completed"
              class="btn btn-primary circle"
              @click="setStatusTask (db, task.taskId, true)">
                <i class="icon icon-check"></i>
            </button>
            <button 
              v-if="task.completed"            
              class="btn circle"
              @click="setStatusTask (db, task.taskId, false)">
                <i class="icon icon-refresh"></i>
            </button>
            <button 
              class="btn btn-primary circle"
              @click="removeTask (db, task.taskId)">
                <i class="icon icon-stop"></i>
            </button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: {
    task: {}
  },
  data () {
    return {
      editTask: false,
      db: this.$firebase.firestore()
    }
  },
  created () {
    this.db.collection('tasks').doc(this.task.taskId).onSnapshot(doc => {
      if (doc.exists) {
        this.task.completed = doc.data().completed
        this.task.title = doc.data().title
      }
    })
  },
  methods: {
    setStatusTask (db, taskId, status) {
      db.collection('tasks').doc(taskId).update({completed: status})
    },
    removeTask (db, taskId) {
      db.collection('tasks').doc(taskId).delete()
    },
    showInputTask () {
      this.editTask = true
      this.$nextTick(() => {
        this.$refs.inputTitleTask.focus()
      })
    },
    updateTitleTask (db, taskId) {
      db.collection('tasks').doc(taskId).update({title: this.task.title}).then(() => {
        this.editTask = false
      })
    }
  }
}
</script>
<style>
  .tachado{
    text-decoration:line-through;
  }
</style>


