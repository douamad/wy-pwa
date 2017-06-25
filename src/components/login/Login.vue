<template>
  <section id="wrapper" class="login-register">
    <spinner v-show="loggingIn" message="Logging in..."></spinner>
    <div class="login-box login-sidebar">
      <div class="white-box">
        <form class="form-horizontal form-material" id="loginform" action="index.html">
          <a href="#" class="text-center db"><img src="../../assets/img/logos/wergu-yaram-logo.png" alt="Home" />
            <br/><img src="../../assets/img/logos/logo-text-dark.png" alt="Home" /></a>
          <div class="form-group m-t-40">
            <div class="col-xs-12">
              <input class="form-control js-login__username" data-id="login.email" type="text" v-model="credentials.email"  required="" placeholder="Email"> </div>
          </div>
          <div class="form-group">
            <div class="col-xs-12">
              <input class="form-control js-login__password" type="password" v-model="credentials.password" required="" placeholder="Password"> </div>
          </div>
          <div class="form-group">
            <div class="col-md-12">
              <div class="checkbox checkbox-primary float-left p-t-0">
                <input id="checkbox-signup" type="checkbox">
                <label for="checkbox-signup"> Remember me </label>
              </div> <a href="#" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
          </div>
          <div class="form-group text-center m-t-20">
            <div class="col-xs-12">
              <button @click="submit()" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button">Log In</button>
            </div>
          </div>
          <!--<div class="row">-->
            <!--<div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">-->
              <!--<div class="social">-->
                <!--<a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a>-->
                <!--<a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fa fa-google-plus"></i> </a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="form-group m-b-0">
            <div class="col-sm-12 text-center">
              <p>Pas encore de compte <a href="#" class="text-primary m-l-5"><b>S'inscrire</b></a></p>
            </div>
          </div>
        </form>
        <!--<form class="form-horizontal" id="recoverform" action="index.html">-->
          <!--<div class="form-group ">-->
            <!--<div class="col-xs-12">-->
              <!--<h3>Recover Password</h3>-->
              <!--<p class="text-muted">Enter your Email and instructions will be sent to you! </p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group ">-->
            <!--<div class="col-xs-12">-->
              <!--<input class="form-control" type="text" required="" placeholder="Email"> </div>-->
          <!--</div>-->
          <!--<div class="form-group text-center m-t-20">-->
            <!--<div class="col-xs-12">-->
              <!--<button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</form>-->
      </div>
    </div>
  </section>
  <!--<div class="ev-login col-sm-4 offset-sm-4">-->
    <!--<spinner v-show="loggingIn" message="Logging in..."></spinner>-->
    <!--<div class="alert alert-danger" v-if="error">-->
      <!--<p>{{ error }}</p>-->
    <!--</div>-->
    <!--<div class="form-group">-->
      <!--<input-->
        <!--type="text"-->
        <!--data-id="login.email"-->
        <!--class="form-control js-login__username"-->
        <!--placeholder="Enter your email"-->
        <!--v-model="credentials.email"-->
      <!--&gt;-->
    <!--</div>-->
    <!--<div class="form-group">-->
      <!--<input-->
        <!--type="password"-->
        <!--class="form-control js-login__password "-->
        <!--placeholder="Enter your password"-->
        <!--v-model="credentials.password"-->
      <!--&gt;-->
    <!--</div>-->
    <!--<button-->
      <!--data-id="login.submit"-->
      <!--class="btn btn-primary solid blank js-login__submit"-->
      <!--@click="submit()"-->
    <!--&gt;-->
      <!--Login &nbsp; <i class="fa fa-arrow-circle-o-right"></i>-->
    <!--</button>-->
    <!--<br><br><br>-->
    <!--<a href="#">Forgot your password?</a><br>-->
    <!--Don’t have an account? &nbsp;<a href="#">Sign up here.</a>-->

  <!--</div>-->
</template>

<script>
import Spinner from '@/components/common/Spinner'

export default {
  name: 'login',
  components: { Spinner },

  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    submit () {
      console.log(this.credentials)
      this.loggingIn = true
      const credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:
      this.$auth.login(credentials, 'dashboard').then((response) => {
        this.loggingIn = false
        this.error = utils.getError(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
