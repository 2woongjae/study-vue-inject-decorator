<template>
  <div>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">{{ user.login }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from "vue-property-decorator";
import UserService from "../services/UserService";

@Component
export default class InjectTest extends Vue {
  users: {
    id: number;
    login: string;
  }[] = [];
  @Inject() userService!: UserService;

  async created() {
    console.log("created");
    this.users = await this.userService.getUsers();
  }
}
</script>

