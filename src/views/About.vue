<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <form @submit.prevent="addNewTodo">
    <label>New Todo</label>
    <input type="text" v-model="newTodo" name="newtodo">
    <button>Add New Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="todo">
      <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">{{todo.content}}</h3>
    </li>
  </ul>
</template>

<script>
import {ref} from 'vue';

export default {
  setup(){
    const newTodo = ref('');
    const todos = ref([]);

    function addNewTodo(){
      console.log(newTodo.value);
      todos.value.push({
        id: Date.now(),
        done: false,
        content: newTodo.value,
      });
      newTodo.value = '';
    }

    function toggleDone(todo){
      todo.done = !todo.done;
    }

    return {
      toggleDone,
      todos,
      newTodo,
      addNewTodo,
    }
  }
}
</script>

<style>
.todo {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}
</style>