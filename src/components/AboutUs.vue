<template>
  <section id="about" class="section bg-white overflow-hidden">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <!-- Content Column -->
        <div class="about-content">
          <div class="section-title align-left">
            <h5>About Us 關於瑪諾</h5>
            <h1>以照顧家人的心情照顧您<br/>成為您值得信賴的好鄰居</h1>
          </div>
          <p class="text-[1.05rem] leading-[1.8] mb-6 text-text-color text-justify">
            讓藥局不單只有領藥這單一的工作，而是能更接近關心民眾，做到更為人性化多元化的關係，並以專業醫療人員角度，積極投入『醫護共同照護患者』，更秉持著以照顧家人的心情照顧您，提供民眾最安全的藥品及自我保健資訊。
          </p>
          <p class="text-[1.05rem] leading-[1.8] mb-6 text-text-color text-justify">
            我們希望能引領專業資深藥師及經驗豐富的醫護相關人員，讓民眾有更安全、更完整的醫護照顧。同時與診所合作，共同打造地方社區關懷及更多健康諮詢服務。
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[35px]">
            <div class="flex items-start gap-[15px]">
              <div class="w-12 h-12 rounded-full bg-light text-primary flex items-center justify-center text-[1.25rem] shrink-0">
                <i class="fas fa-heartbeat"></i>
              </div>
              <div class="feature-text">
                <h4 class="text-[1.1rem] font-bold text-text-dark mb-1">全心照護</h4>
                <p class="text-[0.9rem] text-text-color">如家人般給予貼心叮嚀與關懷</p>
              </div>
            </div>
            <div class="flex items-start gap-[15px]">
              <div class="w-12 h-12 rounded-full bg-light text-primary flex items-center justify-center text-[1.25rem] shrink-0">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="feature-text">
                <h4 class="text-[1.1rem] font-bold text-text-dark mb-1">專業團隊</h4>
                <p class="text-[0.9rem] text-text-color">資深藥師與醫護背景團隊服務</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative w-full rounded-[20px] z-10">
          <img 
            src="https://www.manopharmacy.com/img/about.jpg" 
            alt="關於瑪諾" 
            class="w-full h-[450px] max-lg:h-[350px] object-cover rounded-[20px] block shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(9,30,62,0.15)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
