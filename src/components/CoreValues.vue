<template>
  <section id="feature" class="section bg-light-sec relative z-10">
    <div class="container">
      <div class="section-title">
        <h5>經營理念</h5>
        <h1>我們的經營理念</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] xl:grid-cols-3 gap-5 xl:gap-[30px] items-center">
        <!-- Left Side Features -->
        <div class="flex flex-col gap-6 lg:gap-[35px]">
          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-light text-primary flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
              <i class="fa fa-shield-alt"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">品質保障</h3>
              <p class="text-[0.95rem] text-text-color">提供最安全、最有保障的產品</p>
            </div>
          </div>

          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-light text-primary flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
              <i class="fa fa-baby"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">母嬰照護</h3>
              <p class="text-[0.95rem] text-text-color">提供嬰幼兒健康、成長照顧</p>
            </div>
          </div>

          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-light text-primary flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
              <i class="fa fa-book-medical"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">醫療知識</h3>
              <p class="text-[0.95rem] text-text-color">提供專業用藥及推廣醫療知識</p>
            </div>
          </div>
        </div>

        <!-- Center Image -->
        <div class="flex justify-center max-lg:order-first">
          <div class="relative rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(9,30,62,0.12)] w-full max-w-[380px] border-5 border-white transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:scale-[1.03]">
            <img 
              src="https://www.manopharmacy.com/img/feature.jpg" 
              alt="經營理念" 
              class="w-full h-[400px] max-lg:h-[300px] object-cover block"
            />
          </div>
        </div>

        <!-- Right Side Features -->
        <div class="flex flex-col gap-6 lg:gap-[35px]">
          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-light text-primary flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
              <i class="fa fa-weight"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">體態保健</h3>
              <p class="text-[0.95rem] text-text-color">提供日常保健、管理體態諮詢</p>
            </div>
          </div>

          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-light text-primary flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
              <i class="fa fa-users-cog"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">社區關懷</h3>
              <p class="text-[0.95rem] text-text-color">提供社區關懷，免費體檢服務</p>
            </div>
          </div>

          <!-- Decorative balance item -->
          <div class="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-card transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border border-transparent hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,106,130,0.1)] hover:border-primary/15">
            <div class="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-[#4dd26f] text-white flex items-center justify-center text-[1.35rem] shrink-0 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110 group-hover:rotate-[360deg]">
              <i class="fa fa-star text-white"></i>
            </div>
            <div class="value-text">
              <h3 class="text-[1.15rem] font-extrabold mb-1 text-text-dark">永續服務</h3>
              <p class="text-[0.95rem] text-text-color">深耕在地，成為您全天候的健康伴侶</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoreValues'
}
</script>
