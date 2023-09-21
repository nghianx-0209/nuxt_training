<template>
  <div class="main-content">
    <div class="examinee-search">
      <div class="display-info">
        <div class="flex space-between">
          <div>
            <div>
              <p class="company-name">Sun Asterisk - ASP 1</p>
            </div>
            <br />
            <div>
              <p class="exam-name">[HongNT][ASP]Exam01Employee</p>
            </div>
          </div>
          <div class="flex">
            <TButton title="検査初期化" primary />
            <TButton title="検査内容設定" secondary />
            <TButton title="検査削除" warning />
          </div>
        </div>
        <div>
          <div class="exam-info">
            <div class="exam-info__key">受検ページURL</div>
            <div class="exam-info__value link">
              <a
                href="
https://cubic2.sun-asterisk.vn/hash/hongtestasp01Employee"
              >
                https://cubic2.sun-asterisk.vn/hash/hongtestasp01Employee</a
              >
            </div>
          </div>
          <div class="exam-info">
            <div class="exam-info__key">期間</div>
            <div class="exam-info__value">2023年09月19日 ~ 2024年09月01日</div>
          </div>
          <div class="exam-info">
            <div class="exam-info__key">実施科目</div>
            <div class="exam-info__value"></div>
          </div>
          <div class="exam-info">
            <div class="exam-info__key">申込人数</div>
            <div class="exam-info__value">0</div>
          </div>
        </div>
        <TTable :cell_w="[15, 15, 15, 15, 15, 15]" :data="data" :actions="[]" />
      </div>
      <div class="search-condition"></div>
      <div class="search-result">
        <div class="result-wrapper">JHBJHB</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router1 from "~/routes/router1";

const breakcrumb = useBreakcrumb();
const client = useClient();
const route = useRoute();
const exam = useExam();
const currentPage = route.path.split("/").slice(-1)[0];
const parentItem = router1.find(
  (route) =>
    route.url === currentPage ||
    route.childs?.some((child) => child.url === currentPage)
);
const subItem = parentItem.childs?.find((child) => child.url === currentPage);

breakcrumb.value[0] = {
  title: client.value.info.userId,
  url: `/client/${client.value.info.clientId}/top`,
};
breakcrumb.value[1] = {
  title: exam.value.examId,
  url: undefined,
};
breakcrumb.value[2] = {
  title: parentItem.name,
  url: undefined,
};
if (subItem)
  breakcrumb.value[3] = {
    title: subItem.name,
    url: undefined,
  };

definePageMeta({
  layout: "exam-top",
  middleware: ["auth"],
});
</script>

<script>
export default {
  data() {
    return {
      data: {
        header: ["登録者", "未受検者", "受検中", "受検済", "出力済", "未出力"],
        body: [{ a: "1人", b: "1人", c: "1人", d: "1人", e: "1人", f: "1人" }],
      },
    };
  },
};
</script>

<style lang="scss">
.main-content {
  width: calc(100% - 212px);

  .examinee-search {
    .display-info {
      background: #fff;
      border: 1px solid #f0f1f5;
      box-shadow: 0 4px 8px 0 rgba(129, 138, 160, 0.1);
      margin-top: 72px;
      padding: 24px 48px;

      .company-name {
        color: #3e4a68;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 8px;
        margin: 0;
      }

      .exam-name {
        color: #44507e;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        margin-bottom: 16px;
        margin: 0;
      }

      .exam-info {
        display: grid;
        grid-template-columns: 172px 1fr;
        margin-bottom: 8px;

        .exam-info__key {
          color: #7b88a6;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }

        .exam-info__value {
          color: #3e4a68;
          font-size: 14px;
          font-weight: 400;
        }

        .link {
          a {
            color: #2ba4aa !important;
            cursor: pointer;
            width: -moz-fit-content;
            width: fit-content;
            text-decoration: none !important;
          }
        }
      }

      .table-wrapper {
        border-color: #e6e9ef;
        margin: 1rem 0px;

        th {
          tr {
            height: 40px !important;
          }
        }

        th,
        td {
          text-align: center;
        }

        td {
          border-right: 1px solid #e6e9ef;
        }

        tr {
          &:last-child {
            td {
              &:last-child {
                border: none;
              }
            }
          }
        }
      }
    }

    .search-condition {
      background: #fff;
      border: 1px solid #f0f1f5;
      box-shadow: 0 4px 8px 0 rgba(129, 138, 160, 0.1);
      padding: 24px 48px;
    }

    .search-result {
      margin-top: 40px;
      padding: 0 24px 78px;
      position: relative;

      .result-wrapper {
        border: 1px solid #f0f1f5;
        background-color: #fff;
        border-radius: 16px;
        padding: 24px;
      }
    }
  }
}
</style>
