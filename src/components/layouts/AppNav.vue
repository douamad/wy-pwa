<template>

  <!-- Navigation -->
  <nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header"> <a v-on:click="navBarToggle" class="navbar-toggle hidden-sm hidden-md hidden-lg " href="#" data-toggle="collapse" data-target="navbar-collapse"><i class="ti-menu"></i></a>
      <div class="top-left-part"><a class="logo" href="#"><b><img src="../../assets/img/logos/wergu-yaram-logo.png" alt="accueil" /></b><span class="hidden-xs"><strong>Wergu</strong>Yaram</span></a></div>
      <ul class="nav navbar-top-links navbar-left hidden-xs">
        <li><a href="#" v-on:click="openClose" class="open-close hidden-xs waves-effect waves-light"><i class="icon-arrow-left-circle ti-menu"></i></a></li>
        <li>
          <form role="search" class="app-search hidden-xs">
            <input type="text" placeholder="Search..." class="form-control"> <a href=""><i class="fa fa-search"></i></a> </form>
        </li>
      </ul>
      <ul class="nav navbar-top-links navbar-right pull-right">
        <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-envelope"></i>
          <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
        </a>
          <ul class="dropdown-menu mailbox animated bounceInDown">
            <li>
              <div class="drop-title">You have 4 new messages</div>
            </li>
            <li>
              <div class="message-center">
                <a href="#">
                  <div class="user-img"> <img src="../../assets/img/plugins/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status online pull-right"></span> </div>
                  <div class="mail-contnet">
                    <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>
                </a>
                <a href="#">
                  <div class="user-img"> <img src="../../assets/img/plugins/users/sonu.jpg" alt="user" class="img-circle"> <span class="profile-status busy pull-right"></span> </div>
                  <div class="mail-contnet">
                    <h5>Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span> </div>
                </a>
                <a href="#">
                  <div class="user-img"> <img src="../../assets/img/plugins/users/arijit.jpg" alt="user" class="img-circle"> <span class="profile-status away pull-right"></span> </div>
                  <div class="mail-contnet">
                    <h5>Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>
                </a>
                <a href="#">
                  <div class="user-img"> <img src="../../assets/img/plugins/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status offline pull-right"></span> </div>
                  <div class="mail-contnet">
                    <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
                </a>
              </div>
            </li>
            <li>
              <a class="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i class="fa fa-angle-right"></i> </a>
            </li>
          </ul>
          <!-- /.dropdown-messages -->
        </li>
        <!-- /.dropdown -->
        <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-note"></i>
          <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
        </a>
          <ul class="dropdown-menu dropdown-tasks animated slideInUp">
            <li>
              <a href="#">
                <div>
                  <p> <strong>Task 1</strong> <span class="pull-right text-muted">40% Complete</span> </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p> <strong>Task 2</strong> <span class="pull-right text-muted">20% Complete</span> </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p> <strong>Task 3</strong> <span class="pull-right text-muted">60% Complete</span> </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">
                <div>
                  <p> <strong>Task 4</strong> <span class="pull-right text-muted">80% Complete</span> </p>
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a class="text-center" href="#"> <strong>See All Tasks</strong> <i class="fa fa-angle-right"></i> </a>
            </li>
          </ul>
          <!-- /.dropdown-tasks -->
        </li>
        <!-- /.dropdown -->
        <li class="dropdown">
          <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="../../assets/img/plugins/users/d1.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">Dr. Steave</b> </a>
          <ul class="dropdown-menu dropdown-user animated flipInY">
            <li><a href="#"><i class="ti-user"></i>  My Profile</a></li>
            <li><a href="#"><i class="ti-email"></i>  Inbox</a></li>
            <li><a href="#"><i class="ti-settings"></i>  Account Setting</a></li>
            <li><a href="login.html"><i class="fa fa-power-off"></i>  Logout</a></li>
          </ul>
          <!-- /.dropdown-user -->
        </li>
        <li class="right-side-toggle"> <a class="waves-effect waves-light" href="#"><i class="ti-settings"></i></a></li>
        <!-- /.dropdown -->
      </ul>
    </div>
    <!-- /.navbar-header -->
    <!-- /.navbar-top-links -->
    <!-- /.navbar-static-side -->
  </nav>


  <!-- Fixed navbar -->
<!--<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse ev-appnav">-->
  <!--<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">-->
    <!--<span class="navbar-toggler-icon"></span>-->
  <!--</button>-->
  <!--<a class="navbar-brand" href="#"><img src="../../assets/logo.png" class="ev-appnav__logo"></a>-->
  <!--<div class="collapse navbar-collapse" id="navbarCollapse">-->

    <!--&lt;!&ndash; Logged in &ndash;&gt;-->
    <!--<template v-if="auth.isLoggedIn">-->
      <!--<ul class="navbar-nav mr-auto">-->
        <!--<li class="nav-item active">-->
          <!--<a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div class="form-inline mt-2 mt-md-0">-->
        <!--<input class="form-control mr-sm-2" type="text" v-model="searchText" placeholder="Search">-->
        <!--<button class="ev-appnav__search btn btn-outline-success my-2 my-sm-0" @click="submitSearch()">Search</button>-->
      <!--</div>-->
      <!--<ul class="navbar-nav nav-right ev-appnav__logout">-->
        <!--<li class="nav-item">-->
          <!--<a href="#" @click="logout()">-->
            <!--<button class="btn btn-outline-primary">Logout</button>-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</template>-->

    <!--&lt;!&ndash; Not logged in &ndash;&gt;-->
    <!--<template v-else>-->
      <!--<ul class="navbar-nav mr-auto">-->
        <!--<li class="nav-item active">-->
          <!--<router-link class="nav-link" to="login">Login <span class="sr-only">(current)</span></router-link>-->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!--<router-link to="signup" class="nav-link" href="#">Signup</router-link>-->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="https://github.com/prograhammer/example-vue-project/blob/master/README.md">Tutorial</a>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</template>-->

  <!--</div>-->
<!--</nav>-->

</template>

<script>
import Auth from '@/auth'
export default {
  data () {
    return {
      auth: this.$store.state.auth,
      searchText: '',
      searchFlag: ''
    }
  },
  methods: {
    logout () {
      Auth.logout()
    },
    submitSearch () {
      this.$store.commit(
        'APPNAV_SEARCH',
        {
          searchText: this.searchText,
          searchTimestamp: Date.now()
        }
      )
    },
    openClose(){
      if ($("body").hasClass("content-wrapper")) {
        $("body").trigger("resize");
        $(".sidebar-nav, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
        $("body").removeClass("content-wrapper");
        $(".open-close i").addClass("icon-arrow-left-circle");
        $(".logo span").show();
      } else {
        $("body").trigger("resize");
        $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        $("body").addClass("content-wrapper");
        $(".open-close i").removeClass("icon-arrow-left-circle");
        $(".logo span").hide();
      }
    },
    navBarToggle(){
      $(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close");
    }
  }
}
</script>

<style lang="scss" scoped>
/*
  You can use BEM style even though you are scoped. Helps to reason about
  your styles.
*/
.ev-appnav__logo {
  width: 40px;
}
.ev-appnav__search {
  margin-right: 10px;
}
.ev-appnav__logout {
  margin-top: 1px;
}
</style>
