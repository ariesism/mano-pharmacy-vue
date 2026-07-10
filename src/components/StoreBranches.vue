<template>
  <section id="branches" class="section bg-light-sec relative z-10">
    <div class="container">
      <div class="section-title">
        <h5>門市據點</h5>
        <h1>瑪諾全台據點</h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div 
          v-for="(branch, index) in branches" 
          :key="index"
          class="bg-white rounded-[20px] py-[30px] px-6 shadow-card border border-black/2 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(9,30,62,0.1)] hover:border-primary/10"
        >
          <div class="flex items-center gap-4 mb-6 pb-4 border-b border-dashed border-[#e9ecef]">
            <div class="w-[52px] h-[52px] rounded-xl bg-light flex items-center justify-center overflow-hidden shrink-0">
              <img 
                src="https://www.manopharmacy.com/img/branch.png" 
                alt="Branch Logo" 
                class="w-8 h-8 object-contain"
              />
            </div>
            <div class="branch-title-box">
              <h3 class="text-[1.15rem] font-extrabold text-text-dark mb-1">{{ branch.name }}</h3>
              <span class="inline-block text-xs font-bold color-primary text-primary bg-light py-0.5 px-2 rounded">{{ branch.region }}</span>
            </div>
          </div>

          <div class="flex flex-col gap-[18px] mb-6 grow">
            <div class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt text-primary text-[0.95rem] mt-1"></i>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">地址</span>
                <p class="text-[0.9rem] font-semibold text-text-color leading-[1.4]">{{ branch.address }}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <i class="fas fa-phone-alt text-primary text-[0.95rem] mt-1"></i>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">電話</span>
                <p class="text-[0.9rem] font-semibold text-text-color leading-[1.4]">{{ branch.phone }}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <i class="fas fa-clock text-primary text-[0.95rem] mt-1"></i>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">營業時間</span>
                <p class="text-[0.9rem] font-semibold text-text-color leading-[1.4]" v-html="branch.hours"></p>
              </div>
            </div>
          </div>

          <div class="mt-auto flex justify-start">
            <a 
              :href="branch.igLink" 
              target="_blank" 
              class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border-2 border-[#e1306c] text-[#e1306c] text-[0.85rem] font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-[#e1306c] hover:text-white hover:shadow-[0_4px_12px_rgba(225,48,108,0.15)]"
              title="Follow on Instagram"
            >
              <i class="fab fa-instagram"></i>
              追蹤IG
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StoreBranches',
  setup() {
    const branches = [
      {
        name: '瑪諾藥局',
        region: '新北市樹林區',
        address: '新北市樹林區復興路20號',
        phone: '02-2683-0304',
        hours: '週一至五 07:00-22:00<br/>週六至日 08:00-22:00',
        igLink: 'https://www.instagram.com/manopharmacy_02/'
      },
      {
        name: '祐兒藥局',
        region: '新北市鶯歌區',
        address: '新北市鶯歌區建國路171號',
        phone: '02-8678-1907',
        hours: '週一至週日 08:00-22:00<br/>&nbsp;',
        igLink: 'https://www.instagram.com/manopharmacy_01/'
      },
      {
        name: '鄰康藥局',
        region: '新北市樹林區',
        address: '新北市樹林區日新街48號',
        phone: '02-2675-8058',
        hours: '週一至五 07:30-22:00<br/>週六至日 07:30-18:00',
        igLink: 'https://www.instagram.com/manopharmacy_03/'
      },
      {
        name: '恆新健康藥局',
        region: '桃園市桃園區',
        address: '桃園市桃園區新埔八街111號',
        phone: '03-358-2929',
        hours: '週一至五 08:30-21:30<br/>週六 08:30-18:00 (週日休)',
        igLink: 'https://www.instagram.com/manopharmacy_04/'
      }
    ]

    return {
      branches
    }
  }
}
</script>
