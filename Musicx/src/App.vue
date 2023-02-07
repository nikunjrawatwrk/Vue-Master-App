<template>
  <app-header></app-header>

  <app-intro></app-intro>

  <app-main-content></app-main-content>

  <app-player></app-player>

  <app-auth></app-auth>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppAuth from "@/components/AppAuth.vue";
import AppPlayer from "@/components/AppPlayer.vue";
import AppMainContent from "@/components/AppMainContent.vue";
import AppIntro from "@/components/AppIntro.vue";

import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";

export default {
  name: "App",
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
  components: {
    AppHeader,
    AppAuth,
    AppPlayer,
    AppMainContent,
    AppIntro,
  },
};
</script>
