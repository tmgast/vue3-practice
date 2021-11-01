<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <form @submit.prevent="addNewTodo">
    <label>New Todo</label>
    <input type="text" v-model="newTodo" name="newtodo">
    <button>Add New Todo</button>
  </form>
  <button @click="markAllDone()">Mark All Done</button>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
      <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">{{todo.content}}</h3>
      <button @click="removeTodo(index)">Remove Todo</button>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue';

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

function removeTodo(index){
  todos.value.splice(index, 1);
}

function toggleDone(todo){
  todo.done = !todo.done;
}

function markAllDone(){
  todos.value.forEach((todo) => todo.done = true);
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