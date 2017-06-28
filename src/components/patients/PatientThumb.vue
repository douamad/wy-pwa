<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="white-box">
      <div class="el-card-item">
        <div class="el-card-avatar el-overlay-1"> <img src="../../assets/img/plugins/users/1.jpg" />
          <div class="el-overlay">
            <ul class="el-info">
              <li><a class="btn default btn-outline image-popup-vertical-fit" href="../../assets/img/plugins/users/1.jpg"><i class="icon-magnifier"></i></a></li>
              <li><a class="btn default btn-outline" href="#"><i class="icon-link"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="el-card-content">
          <h3 class="box-title">{{patient.nomComplet}}</h3>
          <small>Sexe: {{patient.sexe}}</small><br/>
          <small>Age: {{patient.age}} years</small><br/>
          <small>{{patient.profession}}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['patient'],
    data() {
      return{

      }
    }
  }
</script>

