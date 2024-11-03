<script setup>
import SizeChart from "@/components/banner-section/SizeChart.vue"
import TopBanner from "@/components/banner-section/TopBanner.vue"
import CardAwarness from "@/components/card-section/CardAwarness.vue"
import Footer from "@/components/common/Footer.vue"
import ImageCampaign from "@/components/demo-campaign/ImageCampaign.vue"
import OfferCampaign from "@/components/demo-campaign/OfferCampaign.vue"
import VideoCampaign from "@/components/demo-campaign/VideoCampaign.vue"
import OrderSection from "@/components/order-section/OrderSection.vue"
import TopSlider from "@/components/slider-section/TopSlider.vue"



</script>

<template>
  <div>
   
  <div><TopBanner/></div>

  <div><videoCampaign/></div>

      <!-- 3rd Section: Image Slider -->
    <div><TopSlider/></div>

  <div><CardAwarness/></div>

  <div><ImageCampaign/></div>

  <div><OfferCampaign/></div>

  <div><SizeChart/></div>

  <div><OrderSection/></div>

 <div><Footer/></div>
  </div>
</template>


<style scoped>

</style>