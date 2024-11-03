<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
</script>

<template>
  <div>
    <section>
      
        
            
              <div class="clb-g">
                <div class="container">
                    <h2 class="slider-head">when will setup vue then add swiperjs package slide</h2>
                    <Swiper
                      :slidesPerView="3"
                      :spaceBetween="30"
                      :autoplay="{ delay: 3000, disableOnInteraction: false }"
                      :loop="true"
                      :pagination="{ clickable: true }"
                      :navigation="true"
                      :modules="[Pagination, Navigation, Autoplay]"
                      class="mySwiper"
                      >
                    <SwiperSlide>
                      <img src="@/assets/images/slide-1.png" alt="" class="w-50 h-50">
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="@/assets/images/slide-2.jpg" alt="" class="w-50 h-50">
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="@/assets/images/slide-3.webp" alt="" class="w-50 h-50">
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="@/assets/images/slide-4.webp" alt="" class="w-50 h-50">
                    </SwiperSlide>
                  </Swiper>
                    <div class="pd-cd text-center">
                        <a href="#" class="order-btn-d">অর্ডার করুন</a>
                    </div>
                </div>
            </div>
            

  </section>
  </div>
</template>


<style scoped>

</style>