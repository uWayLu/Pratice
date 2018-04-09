<template>
    <div class="sign-up">
        <p>Create a new account!</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or <nuxt-link to="login">go back to login</nuxt-link>.</span>
    </div>
</template>

<style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created!");
          },
          function(err) {
            alert("Oops! " + err.message);
          }
        );
    }
  }
};
</script>
