<template>
  <div class="main-content">
    <div class="examinee-search">
      <div class="display-info">
        <div class="flex space-between">
          <div>
            <div>
              <p class="company-name">{{ client.info.userId }}</p>
            </div>
            <br />
            <div>
              <p class="exam-name">{{ exam.exam_name }}</p>
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
            <div class="exam-info__value">{{ exam.from }} ~ {{ exam.end }}</div>
          </div>
          <div class="exam-info">
            <div class="exam-info__key">実施科目</div>
            <div class="exam-info__value"></div>
          </div>
          <div class="exam-info">
            <div class="exam-info__key">申込人数</div>
            <div class="exam-info__value">{{ exam.examinees_number }}</div>
          </div>
        </div>
        <TTable
          :cellWidth="[15, 15, 15, 15, 15, 15]"
          :data="{
            header: data.header,
            body: [{ ...exam.examinees_info }],
          }"
          :actions="[]"
        />
      </div>
      <div class="search-condition grid">
        <div v-if="showFilter">
          <div class="search-condition_item grid grid-column-2">
            <div>
              <label>氏名</label>
              <div
                class="condition-column border text-center"
                style="
                  color: #647396;
                  font-weight: 600;
                  background-color: #f4f7fa;
                "
              >
                <SearchIcon />
                氏名
              </div>
            </div>
            <div>
              <label>フリガナ</label>
              <div
                class="condition-column border text-center"
                style="
                  color: #647396;
                  font-weight: 600;
                  background-color: #f4f7fa;
                "
              >
                <SearchIcon />
                フルガナ
              </div>
            </div>
          </div>
          <div class="search-condition_item grid grid-column-2">
            <div>
              <label>ログインID</label>
              <div
                class="condition-column border text-center"
                style="
                  color: #647396;
                  font-weight: 600;
                  background-color: #f4f7fa;
                "
              >
                <UserAdd />
                ログインID
              </div>
            </div>
          </div>
          <div class="search-condition_item grid grid-column-2">
            <div class="condition-column grid grid-column-2">
              <div>
                <label>分類</label>
                <div class="sub-condition border" style="color: #2e3853">
                  (未設定)
                </div>
              </div>
              <div>
                <label>区分</label>
                <div class="sub-condition border" style="color: #2e3853">
                  (未設定)
                </div>
              </div>
            </div>
            <div class="condition-column grid grid-column-2">
              <div>
                <label>受検状態</label>
                <div class="sub-condition border" style="color: #2e3853">
                  (未設定)
                </div>
              </div>
              <div>
                <label>結果出力状態</label>
                <div class="sub-condition border" style="color: #2e3853">
                  (未設定)
                </div>
              </div>
            </div>
          </div>
          <div class="search-condition_item grid grid-column-2">
            <div class="condition-column grid grid-column-2">
              <div>
                <label>受検期間開始日時</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd hh:mm</span>
                  <CalendarIcon />
                </div>
              </div>
              <div>
                <label>受検期間終了日時</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd hh:mm</span>
                  <CalendarIcon />
                </div>
              </div>
            </div>
            <div class="condition-column grid grid-column-2">
              <div>
                <label>受検者登録日</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd</span>
                  <CalendarIcon />
                </div>
              </div>
              <div>
                <label>受検完了日</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd</span>
                  <CalendarIcon />
                </div>
              </div>
            </div>
          </div>
          <div class="search-condition_item grid grid-column-2">
            <div class="condition-column grid grid-column-2">
              <div>
                <label>受検結果出力開始日時</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd hh:mm</span>
                  <CalendarIcon />
                </div>
              </div>
              <div>
                <label>受検結果出力終了日時</label>
                <div class="sub-condition border">
                  <span>yyyy/mm/dd hh:mm</span>
                  <CalendarIcon />
                </div>
              </div>
            </div>
            <div class="condition-column grid grid-column-2">
              <div>
                <label>受検者表示状態</label>
                <div class="sub-condition border">
                  <span>表示</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-condition_item_action">
          <div
            class="hide-search-condition"
            v-on:click="showFilter = !showFilter"
          >
            <p>
              {{ showFilter ? "フィルターを隠す" : "フィルターを表示する" }}
            </p>
            <UpArrow v-if="showFilter" />
            <DownArrow v-if="!showFilter" />
          </div>
          <TButton
            primary
            title="検索"
            :actions="fetchDataHandle"
            v-if="showFilter"
          >
            <SearchIcon />
          </TButton>
        </div>
      </div>
      <div class="search-result">
        <div class="result-wrapper">
          <h3>{{ data2.body.length }}件の検索結果</h3>
          <div class="flex result-control">
            <div class="flex item-center">
              <input
                type="checkbox"
                v-on:change="
                  (event) => (selectAllStatus = event.target.checked)
                "
              />
              <span>全て選択</span>
            </div>
            <div>
              <TButton title="検索結果をCSV形式でダウンロード" secondary>
                <DownloadIcon />
              </TButton>
            </div>
          </div>
          <div>
            <TTable
              :cellWidth="[5, 15, 15, 15, 15, 15, 15]"
              :data="getData"
              :actions="[{ title: '詳細', handle: getExaminee }]"
              :noDataText="noDataText"
              :selectAll="true"
              :selectAllStatus="selectAllStatus"
              :currentIndex="currentIndex"
            />
            <div v-if="data2?.body.length !== 0" class="data-status">
              <div class="paging-list">
                <div class="paging-control" v-if="currentIndex !== 0">
                  <LeftArrow />
                </div>
                <div class="paging-dot" v-if="currentIndex - 5 > 0">
                  <DotHorizontal />
                </div>
                <li
                  v-for="index in getPagination"
                  class="paging-item"
                  :class="{ 'current-page': currentIndex == index }"
                  :key="index"
                  v-on:click="currentIndex = index"
                >
                  <a href="#">
                    {{ index + 1 }}
                  </a>
                </li>
                <div
                  class="paging-dot"
                  v-if="currentIndex + 5 < data2.body.length / pageSize - 1"
                >
                  <DotHorizontal />
                </div>
                <div
                  class="paging-control"
                  v-if="currentIndex !== data2.body.length / pageSize - 1"
                >
                  <RightArrow />
                </div>
              </div>
              <p>
                全{{ data2.body.length }}件中{{
                  currentIndex * pageSize + 1
                }}~{{ (currentIndex + 1) * pageSize }}件を表示中
              </p>
            </div>
          </div>
          <div class="preline">
            <p v-for="(preline, index) in prelines" :key="index">
              {{ preline }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router1 from "~/routes/router1";
import DownloadIcon from "@/assets/icons/download.svg";
import SearchIcon from "@/assets/icons/search.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import UserAdd from "@/assets/icons/user-add.svg";
import RightArrow from "@/assets/icons/right-arrow.svg";
import LeftArrow from "@/assets/icons/left-arrow.svg";
import UpArrow from "@/assets/icons/up-arrow.svg";
import DownArrow from "@/assets/icons/down-arrow.svg";
import DotHorizontal from "@/assets/icons/dots-horizontal.svg";

const breakcrumb = useBreakcrumb();
const client = useClient();
const route = useRoute();
const exam = useExam();

const currentPage = route.path.split("/").slice(-1)[0];

if (!exam.value) {
  const response = await fetch(
    `http://localhost:3000/exam?id=${route.path.split("/").slice(-2)[0]}`
  );
  const realData = await response.json();
  exam.value = realData[0];
}

const parentItem = router1.find(
  (route, index) =>
    (route.url === currentPage ||
      route.childs?.some((child) => child.url === currentPage)) &&
    index !== 0
);

const subItem = parentItem.childs?.find((child) => child.url === currentPage);
breakcrumb.value[0] = {
  title: client.value.info.userId,
  url: `/client/${client.value.info.clientId}/top`,
};

breakcrumb.value[1] = {
  title: exam.value.id,
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
        body: [],
      },
      data2: {
        header: [
          "受検者氏名",
          "ログインID",
          "パスワード",
          "メール送信",
          "結果出力",
          "状態",
        ],
        body: [],
      },
      prelines: [
        "1回の出力処理可能人数は約1,000名です。",
        "(※1,000名以上を出力される場合、出力されるまでに15分程度かかる事がございます)",
        "上記の場合は、1度の出力人数を1,000名以下に分け、複数回、出力処理をして頂きますようお願い致します。",
        "もしお急ぎの場合は、CUBICサポートセンターまでご連絡ください。",
        "2021年10月19日以前に受検済になった対象者の職務適性は、過去より選択可能であった26職種分からしか出力できません。",
        "再度出力処理を行っても、追加職種での職務適性確認はできかねますのでご了承ください。",
      ],
      noDataText: "検索条件に該当する受検者は見つかりませんでした。",
      fetchData: undefined,
      selectAll: false,
      selectAllStatus: false,
      currentIndex: 0,
      pageSize: 10,
      showFilter: true,
    };
  },
  methods: {
    async fetchDataHandle() {
      const data = await useFetch("http://localhost:3000/examinees");
      this.data2.body = data.data;
    },
  },
  computed: {
    getData() {
      return {
        header: this.data2.header,
        body: this.data2.body.filter(
          (item, index) =>
            index >= this.currentIndex * this.pageSize &&
            index < (this.currentIndex + 1) * this.pageSize
        ),
      };
    },
    getPagination() {
      return [...Array(this.data2.body.length / this.pageSize).keys()].filter(
        (item, index) =>
          index >=
            this.currentIndex -
              5 -
              (this.currentIndex + 5 > this.data2.body.length / this.pageSize
                ? this.currentIndex + 5 - this.data2.body.length / this.pageSize
                : 0) &&
          index <=
            this.currentIndex +
              5 +
              (this.currentIndex - 5 < 0 ? 5 - this.currentIndex - 1 : 0)
      );
    },
  },
};
</script>

<style lang="scss">
.main-content {
  width: calc(100% - 212px);
  padding-left: 213px;

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
          td {
            color: #2ba4aa;
            font-size: 18px;
            font-weight: 600;
          }
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

    .grid {
      display: grid;
    }

    .search-condition {
      background: #fff;
      border: 1px solid #f0f1f5;
      box-shadow: 0 4px 8px 0 rgba(129, 138, 160, 0.1);
      padding: 24px 48px;
      gap: 0.25rem;

      label {
        color: #3e4a68;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }

      .border {
        border: 1px solid #939db6;
        border-radius: 8px;
        padding: 8px 16px;
      }

      .text-center {
        text-align: center;
      }

      .padding-8-16 {
        padding: 8px 16px;
      }

      .grid-column-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .search-condition_item {
        width: 100%;

        .condition-column {
          // background-color: #f4f7fa;
          .sub-condition {
            background-color: #f4f7fa;
            display: flex;
            justify-content: space-between;
            color: #4f5b79;
            font-size: 16px;
          }
        }
      }

      .search-condition_item_action {
        width: 100%;
        // margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          width: 50%;
          margin: 0;
        }

        .hide-search-condition {
          align-items: center;
          color: #2ba4aa;
          cursor: pointer;
          display: flex;
          font-size: 14px;
          font-weight: 600;
          gap: 4px;
          line-height: 20px;

          svg {
            font-size: x-large;
          }
        }
      }
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

        .table-wrapper {
          border-color: #e6e9ef;
          margin: 1rem 0px;
          border: 1px solid #939db6;
          border-radius: 16px;
          margin-bottom: 1rem;

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
            border: none;
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

        .result-control {
          justify-content: space-between;

          button {
            margin: 0;
          }
        }

        .data-status {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: $secondary-300;
        }
      }

      .preline {
        margin-top: 1.5rem;
        margin-left: 1.5rem;

        p {
          color: #7b88a6;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          margin: 0;
        }
      }
    }
  }

  .paging-list {
    display: flex;

    .paging-item {
      align-items: center;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      height: 32px;
      justify-content: center;
      margin-right: 4px;
      min-width: 32px;
      padding: 6px;
      box-sizing: border-box;

      a {
        color: #2ba4aa !important;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-decoration: none;
      }
    }

    .current-page {
      background-color: #647396;
      box-sizing: border-box;

      a {
        color: #fff !important;
        font-weight: 700;
      }
    }

    .paging-control {
      display: flex;
      align-items: center;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      height: 32px;
      justify-content: center;
      margin-right: 4px;
      min-width: 32px;
      padding: 6px;
      box-sizing: border-box;
      background-color: #d8dce5;
    }

    .paging-dot {
      align-items: center;
      border-radius: 12px;
      display: flex;
      height: 32px;
      justify-content: center;
      margin-right: 4px;
      min-width: 32px;
      padding: 6px;
      color: #2ba4aa;
    }
  }
}
</style>
