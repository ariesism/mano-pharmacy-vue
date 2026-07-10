<template>
  <section id="service" class="section bg-white">
    <div class="container">
      <div class="section-title">
        <h5>Our Services</h5>
        <h1>瑪諾服務項目</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group w-full max-w-[360px] mx-auto bg-[#f8f9fa] rounded-[20px] py-10 px-[30px] max-md:py-[30px] max-md:px-5 text-center relative overflow-hidden flex flex-col items-center border border-black/2 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] z-10 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(221,106,130,0.15)] active:scale-[0.98]"
        >
          <!-- Hover background bubble effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary to-[#e8889a] -z-10 translate-y-full transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] rounded-[20px] group-hover:translate-y-0"></div>
          
          <div class="w-[70px] h-[70px] rounded-[18px] bg-white text-primary flex items-center justify-center text-[1.8rem] mb-[25px] shadow-[0_8px_20px_rgba(9,30,62,0.05)] -rotate-10 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:rotate-0 group-hover:scale-105 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none">
            <i :class="[service.icon, 'transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)]']"></i>
          </div>
          <h3 class="text-[1.25rem] font-extrabold leading-[1.4] mb-[15px] text-text-dark transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:text-white" v-html="service.title"></h3>
          <p class="text-[0.95rem] leading-[1.6] text-text-color mb-5 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:text-white/90">{{ service.desc }}</p>
          <button
            type="button"
            @click.stop="openModal(index)"
            class="mt-auto flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-3 py-2 text-[0.8rem] font-semibold text-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:scale-[1.02] hover:shadow-[0_6px_14px_rgba(0,0,0,0.08)] md:mt-2 md:bg-white md:text-primary md:shadow-[0_4px_10px_rgba(0,0,0,0.05)] lg:mt-auto lg:bg-white lg:text-primary"
          >
            <span class="max-lg:font-bold">點我查看</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div 
      v-if="selectedServiceIndex !== null"
      class="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-[25px] max-w-[600px] w-full shadow-[0_20px_60px_rgba(9,30,62,0.2)] transform transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] scale-100 opacity-100"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b border-[#e9ecef]">
          <div class="flex items-center gap-4">
            <div class="w-[60px] h-[60px] rounded-[15px] bg-gradient-to-br from-primary to-[#e8889a] text-white flex items-center justify-center text-[1.5rem] shadow-[0_8px_20px_rgba(221,106,130,0.2)]">
              <i :class="services[selectedServiceIndex].icon"></i>
            </div>
            <h2 class="text-[1.5rem] font-extrabold text-text-dark" v-html="services[selectedServiceIndex].title"></h2>
          </div>
          <button 
            @click="closeModal"
            class="w-9 h-9 rounded-full bg-light text-text-dark flex items-center justify-center text-[1.2rem] hover:bg-primary hover:text-white transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)]"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6 max-h-[70vh] overflow-y-auto">
          <p class="text-[1rem] leading-[1.8] text-text-color mb-6">{{ services[selectedServiceIndex].desc }}</p>
          <div class="bg-light rounded-[15px] p-5 border-l-4 border-primary">
            <h4 class="font-extrabold text-text-dark mb-3">服務特色</h4>
            <ul class="space-y-2 text-[0.95rem] text-text-color">
              <li v-for="(feature, idx) in services[selectedServiceIndex].features" :key="idx" class="flex items-start gap-2">
                <i class="fas fa-check text-primary mt-1 shrink-0"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="flex justify-end gap-3 p-6 border-t border-[#e9ecef]">
          <button 
            @click="closeModal"
            class="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-bold transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-primary hover:text-white"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'OurServices',
  setup() {
    const selectedServiceIndex = ref(null)

    const services = [
      {
        icon: 'fas fa-file-medical',
        title: '各大醫院及診所<br/>慢性/連續處方箋',
        desc: '提供與各大醫院同等級藥品調劑服務，免排隊、免預約，專業藥師現場核對、親自指導用藥注意事項。',
        features: [
          '與各大醫院同等級的藥品調劑服務',
          '免排隊、免預約，快速高效',
          '專業藥師現場核對確認',
          '詳細的用藥指導與注意事項說明',
          '支援慢性病連續處方箋',
          '安全的隱私保護措施'
        ]
      },
      {
        icon: 'fas fa-pills',
        title: '中西各類藥品',
        desc: '備有齊全的國內外合法中西指示藥品與成藥，針對感冒、疼痛等日常不適，提供您專業的用藥諮詢。',
        features: [
          '齊全的國內外合法中西藥品',
          '指示藥品與成藥應有盡有',
          '應對感冒、疼痛等日常不適',
          '專業藥師實時諮詢服務',
          '嚴格的品質管理與認證',
          '合理的價格與保險給付'
        ]
      },
      {
        icon: 'fas fa-capsules',
        title: '營養保健品',
        desc: '精選多國專利認證的葉黃素、益生菌、魚油等優質膳食補充劑，根據您的生活作息量身推薦。',
        features: [
          '多國專利認證的優質成分',
          '葉黃素、益生菌、魚油等熱銷產品',
          '針對不同生活作息的推薦',
          '詳細的營養價值說明',
          '安全無副作用的天然配方',
          '定期補貨最新產品'
        ]
      },
      {
        icon: 'fas fa-stethoscope',
        title: '核可醫療器材',
        desc: '提供衛福部許可之血壓計、血糖儀、護具等居家用醫療保健器材，現場教導正確操作與保養方式。',
        features: [
          '衛福部許可的合法醫療器材',
          '血壓計、血糖儀、護具等完整選擇',
          '適合居家健康管理使用',
          '現場示範正確操作方法',
          '詳細的保養與維護指導',
          '終身客服支援服務'
        ]
      },
      {
        icon: 'fas fa-baby',
        title: '嬰幼兒產品',
        desc: '呵護寶貝成長！精選知名品牌嬰幼兒配方奶粉、副食品、尿布與溫和低敏的嬰幼兒護膚及清潔用品。',
        features: [
          '知名品牌配方奶粉與副食品',
          '高品質尿布與紙尿褲',
          '溫和低敏的護膚產品',
          '嬰幼兒專用清潔用品',
          '符合國際安全標準',
          '專業諮詢協助新手父母'
        ]
      },
      {
        icon: 'fas fa-weight',
        title: '塑身體重管理',
        desc: '結合營養學與健康管理，由專業人員指導健康體態觀念，搭配合格輔助保健品，科學且安全地達成目標。',
        features: [
          '個性化的體態管理方案',
          '結合營養學的科學指導',
          '合格認證的輔助保健品',
          '定期追蹤與效果評估',
          '安全且無副作用的方法',
          '專業團隊全程支援'
        ]
      }
    ]

    const openModal = (index) => {
      selectedServiceIndex.value = index
    }

    const closeModal = () => {
      selectedServiceIndex.value = null
    }

    return {
      services,
      selectedServiceIndex,
      openModal,
      closeModal
    }
  }
}
</script>
