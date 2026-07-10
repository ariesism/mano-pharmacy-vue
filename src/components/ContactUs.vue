<template>
  <section id="contact" class="section bg-white">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <!-- Contact Info Column -->
        <div class="contact-info">
          <div class="section-title align-left">
            <h5>聯絡我們</h5>
            <h1>Contact Us</h1>
          </div>
          <p class="text-[1.05rem] leading-[1.8] mb-[35px] text-text-color">
            若您有任何需要我們服務的地方，請填寫右側表單表達您的意見，我們收到您的來信後，將儘速於 3～5 日內回覆（不含週六例假日）。
          </p>

          <div class="flex flex-col gap-5">
            <!-- Email -->
            <div class="flex items-center gap-5 bg-[#f8f9fa] p-5 rounded-2xl border border-black/1 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:translate-x-1 hover:shadow-card hover:bg-white hover:border-primary/15">
              <div class="w-[50px] h-[50px] rounded-xl bg-light text-primary flex items-center justify-center text-[1.25rem] shrink-0">
                <i class="fas fa-envelope-open"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">電子信箱</span>
                <a href="mailto:services@manopharmacy.com" class="text-[1.05rem] font-bold text-text-dark hover:text-primary">
                  services@manopharmacy.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-5 bg-[#f8f9fa] p-5 rounded-2xl border border-black/1 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:translate-x-1 hover:shadow-card hover:bg-white hover:border-primary/15">
              <div class="w-[50px] h-[50px] rounded-xl bg-light text-primary flex items-center justify-center text-[1.25rem] shrink-0">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">客服電話</span>
                <a href="tel:+886226771124" class="text-[1.05rem] font-bold text-text-dark hover:text-primary">
                  02-2677-1124
                </a>
              </div>
            </div>

            <!-- Address -->
            <a
              href="https://maps.google.com/?q=新北市鶯歌區光復街29號3樓"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-5 bg-[#f8f9fa] p-5 rounded-2xl border border-black/1 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:translate-x-1 hover:shadow-card hover:bg-white hover:border-primary/15"
            >
              <div class="w-[50px] h-[50px] rounded-xl bg-light text-primary flex items-center justify-center text-[1.25rem] shrink-0">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold uppercase text-[#adb5bd] mb-[2px]">公司地址</span>
                <p class="text-[1.05rem] font-bold text-text-dark">
                  新北市鶯歌區光復街29號3樓
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- Form Column -->
        <div class="flex">
          <div class="bg-gradient-to-br from-dark to-dark-light rounded-[24px] p-10 max-md:p-[30px] w-full text-white shadow-[0_20px_40px_rgba(9,30,62,0.15)] flex flex-col justify-center">
            <h3 class="text-2xl text-white mb-[30px] font-extrabold text-center relative pb-3">
              線上諮詢表單
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-primary rounded-[2px]"></div>
            </h3>
            
            <form v-if="formState !== 'success'" @submit.prevent="submitForm" class="flex flex-col gap-5">
              <div class="form-group">
                <label class="text-sm font-semibold text-white/80 mb-2 block">
                  您的姓名 <span class="text-secondary">*</span>
                </label>
                <input 
                  type="text" 
                  v-model="formData.name" 
                  placeholder="請輸入您的姓名" 
                  required
                  class="w-full py-[15px] px-5 rounded-xl border border-white/15 bg-white/8 text-white font-sans text-[0.95rem] outline-none transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] placeholder-white/50 focus:border-primary focus:bg-white/15 focus:shadow-[0_0_15px_rgba(221,106,130,0.25)]"
                />
              </div>

              <div class="form-group">
                <label class="text-sm font-semibold text-white/80 mb-2 block">
                  您的電子信箱 <span class="text-secondary">*</span>
                </label>
                <input 
                  type="email" 
                  v-model="formData.email" 
                  placeholder="請輸入您的電子信箱" 
                  required
                  class="w-full py-[15px] px-5 rounded-xl border border-white/15 bg-white/8 text-white font-sans text-[0.95rem] outline-none transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] placeholder-white/50 focus:border-primary focus:bg-white/15 focus:shadow-[0_0_15px_rgba(221,106,130,0.25)]"
                />
              </div>

              <div class="form-group">
                <label class="text-sm font-semibold text-white/80 mb-2 block">
                  諮詢主題 <span class="text-secondary">*</span>
                </label>
                <select 
                  v-model="formData.subject" 
                  required
                  class="w-full py-[15px] px-5 rounded-xl border border-white/15 bg-white/8 text-white font-sans text-[0.95rem] outline-none transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] focus:border-primary focus:bg-white/15 focus:shadow-[0_0_15px_rgba(221,106,130,0.25)] cursor-pointer appearance-none bg-no-repeat"
                  style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>'); background-position: right 12px center; background-size: 20px; padding-right: 40px;"
                >
                  <option value="" disabled>-- 請選擇諮詢主題 --</option>
                  <option value="處方箋調劑">處方箋調劑服務</option>
                  <option value="藥品諮詢">中西藥品諮詢</option>
                  <option value="保健品">營養保健品</option>
                  <option value="醫療器材">醫療器材諮詢</option>
                  <option value="嬰幼兒產品">嬰幼兒產品</option>
                  <option value="體態管理">塑身體重管理</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              <div class="form-group">
                <label class="text-sm font-semibold text-white/80 mb-2 block">
                  諮詢內容 <span class="text-secondary">*</span>
                </label>
                <textarea 
                  v-model="formData.message" 
                  rows="4" 
                  placeholder="請輸入您的諮詢內容" 
                  required
                  class="w-full py-[15px] px-5 rounded-xl border border-white/15 bg-white/8 text-white font-sans text-[0.95rem] outline-none transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] placeholder-white/50 focus:border-primary focus:bg-white/15 focus:shadow-[0_0_15px_rgba(221,106,130,0.25)] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="formState === 'submitting'" 
                class="btn btn-primary !py-[14px] !px-5 !text-base w-full !rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="formState === 'submitting'">
                  <i class="fas fa-spinner fa-spin"></i> 傳送中...
                </span>
                <span v-else>
                  <i class="fas fa-paper-plane"></i> 送出表單
                </span>
              </button>
            </form>

            <!-- Success State -->
            <div v-else class="text-center py-5">
              <div class="text-[4rem] text-secondary mb-5 animate-scale-up">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3 class="text-white mb-2.5 font-bold">表單傳送成功！</h3>
              <p class="text-white/80 mb-[25px]">我們已收到您的諮詢，將會儘速與您聯絡。</p>
              <button @click="resetForm" class="btn btn-secondary mt-[15px]">
                再次填寫表單
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactUs',
  setup() {
    const formState = ref('idle') // idle, submitting, success
    const formData = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const submitForm = () => {
      formState.value = 'submitting'
      
      // Simulate API call
      setTimeout(() => {
        formState.value = 'success'
      }, 1500)
    }

    const resetForm = () => {
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''
      formState.value = 'idle'
    }

    return {
      formData,
      formState,
      submitForm,
      resetForm
    }
  }
}
</script>

<style scoped>
@keyframes scaleUp {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-scale-up {
  animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* Select 選項樣式 */
select option {
  background-color: #ffffff;
  color: #091E3E;
  padding: 8px;
}

select option:checked {
  background: linear-gradient(#DD6A82, #DD6A82);
  background-color: #DD6A82;
  color: #ffffff;
}

select option:hover {
  background-color: #f8f9fa;
  color: #091E3E;
}
</style>
