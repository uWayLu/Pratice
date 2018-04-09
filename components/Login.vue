<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signIn">Connection</button>
        <p>Please sign in. You can <nuxt-link to="sign-up">register an new account</nuxt-link>.</p>
    </div>
</template>

<style scoped>
.login {
  margin: 10px 0;
  width: 20%;
  cursor: pointer;
}
button {
  margin-top: 20px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  font-size: 13px;
}
</style>

<script>
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      this.$router.replace("/todolist");
    },
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            // console.log(user);
            alert("Welcome back! " + user.email);
          },
          function(err) {
            alert("Oops! " + err.message);
          }
        );
    }
  }
};
</script>