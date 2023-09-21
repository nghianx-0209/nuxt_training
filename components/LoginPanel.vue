<template>
  <div class="login-wrapper">
    <h3 class="login-title">{{ loginTitle }}</h3>
    <form aria-required="true">
      <div class="input-area">
        <div class="label-input">{{ labelInputLoginID }}</div>
        <CustomInput
          :placeholder="loginIdPlaceholder"
          :value="inputText"
          @inputValue="changeUserId($event)"
          :validationFunction="(value) => value === 'nghia.com' && value !== ''"
          :validationText="loginIdPlaceholder"
        >
          <template v-slot:header_icon>
            <UserIcon />
          </template>
        </CustomInput>
      </div>

      <div class="input-area">
        <div class="label-input">{{ labelInputPassword }}</div>
        <CustomInput
          :placeholder="passwordPlaceholder"
          :password="true"
          @inputValue="changePassword($event)"
          :validationFunction="value => value !== ''"
          :validationText="passwordPlaceholder"
        >
          <template v-slot:header_icon>
            <LockClosedIcon />
          </template>
        </CustomInput>
      </div>

      <div class="forgot-password-text">
        <span>{{ forgotPasswordTitle }}</span>
      </div>

      <TButton :title="loginTitle" primary :actions="() => submitHandle()" />
    </form>
    <div class="personal-info-handle-text">
      <a :href="personalInfoTextLink">{{ personalInfoText }}</a>
    </div>

    <div class="login-info">
      <div class="login-info-item" style="color: #2ba4aa">
        <ExclamationCircle />
        <div style="font-size: 1.125rem">
          <span>{{ recommendEnvironment }}</span>
        </div>
      </div>
      <div class="login-info-item">
        <div class="login-info-item__content">
          <div style="color: #4f5b79; width: 160px">
            <span>{{ browser }}</span>
          </div>
          <div style="color: #7b88a6; font-weight: 500">
            <div v-for="(browser, index) in browsers" :key="index">
              <span>{{ browser }}</span>
            </div>
          </div>
        </div>
        <div class="login-info-item__content">
          <div style="color: #4f5b79; width: 160px">
            <span>{{ browserSetting }}</span>
          </div>
          <div style="color: #7b88a6; font-weight: 500">
            <span>{{ browserSettingText }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="caution-info">
      {{ cautionText1 }}
      <br />
      {{ cautionText2 }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUserId: "",
      inputPassword: "",
      loginTitle: "ログイン",
      labelInputLoginID: "ログインID",
      labelInputPassword: "パスワード",
      loginIdPlaceholder: "ログインIDを入力してください",
      passwordPlaceholder: "パスワードを入力してください",
      forgotPasswordTitle: "パスワードを忘れた場合",
      personalInfoText: "個人情報を取り扱いに関して",
      personalInfoTextLink: "https://www.triumph98.com/info/privacy.html/",
      recommendEnvironment: "推奨環境",
      browser: "ブラウザ",
      browsers: [
        "Microsoft Edge 最新版",
        "Google Chrome 最新版",
        "Safari 最新版",
      ],
      browserSetting: "ブラウザ設定",
      browserSettingText: "ブラウザのCookie, Javascriptを有効してください",
      cautionText1:
        "※本システムは上記推奨環境で動作確認を実施しておりますので、条件に満たない環境では正常に作動しませんので予めご了承ください。",
      cautionText2:
        "※本システムはセキュリティ保持の為、ログイン後何も行わなかった場合(約1時間)タイムアウトとなり、その後操作を行うと自動的にログイン画面に戻ります。",
    };
  },
  watch: {},
  methods: {
    changeUserId(value) {
      this.inputUserId = value;
    },

    changePassword(value) {
      this.inputPassword = value;
    },

    submitHandle() {
      const loginInfo = {
        userId: this.inputUserId,
        password: this.inputPassword,
      };

      this.loginHandle(loginInfo);
    },
  },
};
</script>

<script setup>
import UserIcon from "@/assets/icons/user.svg";
import LockClosedIcon from "@/assets/icons/lock-closed.svg";
import ExclamationCircle from "@/assets/icons/exclamation-circle.svg";

defineProps({
  loginHandle: Function,
});
</script>

<style lang="scss">
.login-wrapper {
  background: #fff;
  border: 1px solid #f0f1f5;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(129, 138, 160, 0.1);
  max-width: 604px;
  padding: 24px;
  margin: auto;
  box-sizing: border-box;

  .login-title {
    text-align: center;
    color: $main-green-500;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
    margin-top: 0 !important;
  }

  .input-area {
    margin-bottom: 1.5rem;
  }

  .label-input {
    margin-bottom: 4px;
    color: #3e4a68;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }

  form {
    color: #2e3853;

    .forgot-password-text {
      cursor: pointer;
      color: $main-green-500;
      margin-bottom: 1.5rem;
    }

    button {
      width: 100%;
      height: 48px;
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  .personal-info-handle-text {
    text-align: center;
    width: 100%;
    margin-bottom: 1.5rem;

    a {
      font-size: 0.875rem;
      color: $main-green-500;
      text-decoration: none;
    }
  }

  .login-info {
    border-top: 1px solid #f0f1f5;
    padding-top: 16px;
    .login-info-item {
      position: relative;
      padding-left: 32px;
      margin-bottom: 1.15rem;

      svg {
        position: absolute;
        left: 0;
        font-size: 24px;
      }

      .login-info-item__content {
        display: flex;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 24px;
      }
    }
  }

  .caution-info {
    padding-left: 32px;
    color: $sub-300;
  }
}
</style>
