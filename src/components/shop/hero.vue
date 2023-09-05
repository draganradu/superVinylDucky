<script setup lang="ts">
import Card from '@/scaffolding/Card.vue'
</script>

<template>
  <Card>
    <div class="row">
      <div class="col-6 text">
        <h1>We moved</h1>
        <p>Our shop has moved to a new location. We are now in Bennekelstraat 112 corner with Reinkenstraat. Look for the giant duck.</p>
        <p><a
            href="https://www.google.com/maps/place/Bennekelstraat+112,+5654+DJ+Eindhoven/@51.4198787,5.4570447,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6d9a34dc881e1:0x32c30724015711bc!8m2!3d51.4198754!4d5.4596196!16s%2Fg%2F11v0kf2j89?entry=ttu"
            type="button" class="btn btn-outline-success" target="_blank">
            <i class="bi bi-pin-map"></i> Map
          </a>
        </p>
      </div>
      <div class="col-6 position-relative" id="map">
        <div class="gradient-map"></div>
        <div id="inner-map"></div>
      </div>
    </div>
  </Card>
</template>

<style>
.text {
  z-index: 3;
}

.gradient-map,
#inner-map {
  position: absolute;
  top: -25px;
  bottom: -25px;
  left: -70px;
}

.gradient-map {
  width: 150px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  z-index: 2;
}

#inner-map {
  top: -25px;
  right: -20px;
  background-image: url('../../assets/bennekelstraat.png');
  background-size: cover;
  background-position:
    top right,
    0px 0px;
  background-repeat: no-repeat;
  background-origin: content-box;
  z-index: 1;

}
</style>