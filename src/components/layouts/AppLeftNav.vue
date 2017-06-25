<template>
  <!-- Left navbar-header -->
  <div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse slimscrollsidebar" id="container-scroll">
      <ul class="nav" id="side-menu">
        <li class="sidebar-search hidden-sm hidden-md hidden-lg">
          <!-- input-group -->
          <div class="input-group custom-search-form">
            <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn">
            <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
            </span> </div>
          <!-- /input-group -->
        </li>
        <li class="user-pro">
          <a href="#" class="waves-effect"><img src="../../assets/img/plugins/users/d1.jpg" alt="user-img" class="img-circle"> <span class="hide-menu">Dr. Steve Gection<span class="fa arrow"></span></span>
          </a>
          <ul class="nav nav-second-level">
            <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
            <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
            <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
            <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
          </ul>
        </li>
        <li class="nav-small-cap m-t-10">--- Main Menu</li>
        <li> <a href="#" class="waves-effect"><i class="ti-dashboard p-r-10"></i> <span class="hide-menu">Dashboard</span></a> </li>
        <li> <a href="#" class="waves-effect"><i class="icon-envelope p-r-10"></i> <span class="hide-menu"> Mailbox <span class="fa arrow"></span><span class="label label-rouded label-danger pull-right">6</span></span></a>
          <ul class="nav nav-second-level">
            <li> <a href="#">Inbox</a></li>
            <li> <a href="#">Inbox detail</a></li>
            <li> <a href="#">Compose mail</a></li>
          </ul>
        </li>
        <li class="nav-small-cap m-t-10">--- Professional</li>
        <li> <a href="#" class="waves-effect"><i class="ti-calendar p-r-10"></i> <span class="hide-menu"> Appointment <span class="fa arrow"></span></span></a>
          <ul class="nav nav-second-level">
            <li> <a href="#">Doctor Schedule</a> </li>
            <li> <a href="#">Book Appointment</a> </li>
          </ul>
        </li>
        <li> <a href="#" class="waves-effect"><i class="ti-files fa-fw
                              "></i> <span class="hide-menu">Sample Pages<span class="fa arrow"></span><span class="label label-rouded label-purple pull-right">30</span></span></a>
          <ul class="nav nav-second-level">
            <li><a href="#">Starter Page</a></li>
            <li><a href="#">Blank Page</a></li>
            <li><a href="#" class="waves-effect">Email Templates
              <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li><a href="#">Basic</a></li>
                <li><a href="#">Alert</a></li>
                <li><a href="#">Billing</a></li>
                <li><a href="#">Reset Pwd</a></li>
              </ul>
            </li>
            <li><a href="#">Lightbox Popup</a></li>
          </ul>
        </li>
        <li class="nav-small-cap">--- Support</li>
        <li> <a href="#" class="waves-effect"><i data-icon="F" class="linea-icon linea-software fa-fw"></i> <span class="hide-menu">Multi-Level Dropdown<span class="fa arrow"></span></span></a>
          <ul class="nav nav-second-level">
            <li> <a href="#">Second Level Item</a> </li>
            <li> <a href="#">Second Level Item</a> </li>
            <li> <a href="#" class="waves-effect">Third Level <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li> <a href="#">Third Level Item</a> </li>
                <li> <a href="#">Third Level Item</a> </li>
                <li> <a href="#">Third Level Item</a> </li>
                <li> <a href="#">Third Level Item</a> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#" class="waves-effect"><i class="icon-logout fa-fw"></i> <span class="hide-menu">Log out</span></a></li>
        <li class="hide-menu">
          <a href="#"> <span>Progress Report</span>
            <div class="progress">
              <div class="progress-bar progress-bar-info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
            </div> <span>Leads Report</span>
            <div class="progress">
              <div class="progress-bar progress-bar-danger" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%" role="progressbar"> <span class="sr-only">85% Complete (success)</span> </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Left navbar-header end -->
</template>
<script>
  import Auth from '@/auth'
  export default {
    mounted  () {
      let container = document.getElementById('container-scroll');
      Ps.initialize(container);
    },
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
      }
    }
  }

</script>
<style lang="css">
  #container-scroll {
    position: relative;
    height: 100%; /* Or whatever you want (eg. 400px) */
  }
</style>
