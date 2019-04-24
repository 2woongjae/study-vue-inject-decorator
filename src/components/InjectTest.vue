<template>
  <div>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">{{ user.login }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from "vue-property-decorator";
import { AxiosStatic } from "axios";

@Component
export default class InjectTest extends Vue {
  users: {
    id: number;
    login: string;
  }[] = [];
  @Inject() myHttp!: AxiosStatic;

  async created() {
    console.log("created");
    try {
      const res = await this.myHttp.get("https://api.github.com/users");
      this.users = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

