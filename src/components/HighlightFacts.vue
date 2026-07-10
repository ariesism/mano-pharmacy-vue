<template>
  <div class="relative z-10 -mt-[40px] lg:-mt-[75px] pb-[30px]">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <!-- Fact 1 -->
        <div class="flex items-center py-[25px] px-[20px] lg:py-[35px] lg:px-[30px] h-auto lg:h-[150px] rounded-2xl shadow-[0_15px_35px_rgba(9,30,62,0.08)] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(221,106,130,0.15)] bg-gradient-to-br from-primary to-[#e8889a] text-white">
          <div class="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <i class="fa fa-users text-primary text-[1.6rem]"></i>
          </div>
          <div>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] text-inherit">提供專業用藥及</h3>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] text-inherit">推廣醫療知識</h3>
          </div>
        </div>

        <!-- Fact 2 -->
        <div class="flex items-center py-[25px] px-[20px] lg:py-[35px] lg:px-[30px] h-auto lg:h-[150px] rounded-2xl shadow-[0_15px_35px_rgba(9,30,62,0.08)] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(221,106,130,0.15)] bg-white border border-primary/15 text-dark">
          <div class="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <i class="fa fa-check text-white text-[1.6rem]"></i>
          </div>
          <div>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] !text-dark">提供日常保健</h3>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] !text-dark">管理體態諮詢</h3>
          </div>
        </div>

        <!-- Fact 3 -->
        <div class="flex items-center py-[25px] px-[20px] lg:py-[35px] lg:px-[30px] h-auto lg:h-[150px] rounded-2xl shadow-[0_15px_35px_rgba(9,30,62,0.08)] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(221,106,130,0.15)] bg-gradient-to-br from-primary to-[#e8889a] text-white">
          <div class="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
            <i class="fa fa-award text-primary text-[1.6rem]"></i>
          </div>
          <div>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] text-inherit">專業培訓</h3>
            <h3 class="text-[1.15rem] font-bold leading-[1.4] text-inherit">經營管理 ▪ 持續成長</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighlightFacts'
}
</script>
