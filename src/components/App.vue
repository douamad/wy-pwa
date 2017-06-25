<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  components: {  },
  data () {
    return {

      windowWidth: 0,
      windowHeigth: 0,
      topOffset: 60
    }
  },
  mounted () {
    this.$nextTick(function() {
        window.addEventListener('resize', this.correctSidebar);
    })
    this.correctSidebar()
    $('body').trigger("resize");
    /* ===== Tooltip Initialization ===== */

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    /* ===== Popover Initialization ===== */

    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    /* ===== Collepsible Toggle ===== */

    $(".collapseble").on("click", function () {
      $(".collapseblebox").fadeToggle(350);
    });

    $('.visited li a').on("click", function (e) {
      $('.visited li').removeClass('active');
      var $parent = $(this).parent();
      if (!$parent.hasClass('active')) {
        $parent.addClass('active');
      }
      e.preventDefault();
    });
  },
  methods: {
    correctSidebar(event){
      //console.log('correcting')
      this.windowWidth = (window.innerWidth > 0) ? window.innerWidth : this.screen.width
      this.windowHeight = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1
      if (this.windowWidth < 768) {
        $('div.navbar-collapse').addClass('collapse');
        this.topOffset = 100; /* 2-row-menu */
      } else {
        $('div.navbar-collapse').removeClass('collapse');
      }
      if (this.windowWidth < 1170) {
        $('body').addClass('content-wrapper');
        $(".open-close i").removeClass('icon-arrow-left-circle');
        $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        $(".logo span").hide();
      } else {
        $('body').removeClass('content-wrapper');
        $(".open-close i").addClass('icon-arrow-left-circle');
        $(".logo span").show();
      }

      this.windowHeight = this.windowHeight - this.topOffset;
      if (this.windowHeight < 1) {
        this.windowHeight = 1;
      }
      if (this.windowHeight > this.topOffset) {
        $("#page-wrapper").css("min-height", (this.windowHeight) + "px");
      }
    }
  }
}
</script>
<style src="../assets/style/colors/green.scss" lang="scss"></style>

