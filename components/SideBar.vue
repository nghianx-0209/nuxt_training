<template>
  <div class="sidebar-wrapper">
    <div class="item-list">
      <ul>
        <li v-for="(item, index) in route" :key="index">
          <div
            class="sidebar-item"
            :class="{
              'active-sidebar-item': isActive(
                item.url,
                item.childs?.map((child) => child.url),
                exam
              ),
            }"
            v-on:click="
              () => {
                if (!item.childs) {
                  navigate(client, exam, item.url);
                  breakcrumb = breakcrumb.slice(0, 1);
                  breakcrumb[1] = item.name;
                } else showSubMenu[index] = !showSubMenu[index];
              }
            "
          >
            <component :is="item.icon" />
            {{ item.name }}
            <span v-if="item.childs" class="submenu-arrow">
              <Downarrow />
            </span>
          </div>
          <div
            class="childs-item"
            v-if="item.childs?.length != 0 && showSubMenu[index]"
          >
            <ul>
              <li
                v-for="(child, index2) in item.childs"
                :class="{
                  'active-submenu-item': isActive(child.url, [], exam),
                }"
                v-on:click="
                  () => {
                    navigate(client, exam, child.url);
                    breakcrumb[1] = item.name;
                    breakcrumb[2] = child.name;
                  }
                "
                :key="index2"
              >
                {{ child?.name }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeIcon from "@/assets/icons/home.svg";
import AdjustmentIcon from "@/assets/icons/adjustments.svg";
import UsersGroup from "@/assets/icons/user-group.svg";
import ViewGrid from "@/assets/icons/view-grid.svg";
import ClipboardList from "@/assets/icons/clipboard-list.svg";
import Mail from "@/assets/icons/mail.svg";
import Downarrow from "@/assets/icons/down.svg";
import route, { prefix } from "@/routes/router1";

export default {
  components: {
    HomeIcon,
    AdjustmentIcon,
    UsersGroup,
    ViewGrid,
    ClipboardList,
    Mail,
  },
  data() {
    return {
      activeSubIndex: undefined,
      showSubMenu: route.map(() => true),
    };
  },
  methods: {
    navigate(client, exam, url) {
      // navigateTo(
      //   `${prefix
      //     .replace(":clientId", client.clientId)
      //     .replace(":examId", exam.examId)}${url}`
      // );
      navigateTo(url);
    },
  },
};
</script>

<script setup>
const currentRoute = useRoute();
const client = useClient();
const exam = useExam();
const breakcrumb = useBreakcrumb();

const isActive = (url1, url2, exam) => {
  // console.log(url1, url2);
  // const child = url2?.some(
  //   (url) =>
  //     prefix
  //       .replace(":clientId", client.value.info.clientId)
  //       .replace(":examId", exam.examId) +
  //       "/" +
  //       url ===
  //     currentRoute.path
  // );
  // console.log(
  //   prefix
  //     .replace(":clientId", client.value.info.clientId)
  //     .replace(":examId", exam.examId) +
  //     url1 ===
  //     currentRoute.path || child
  // );
  // return (
  //   prefix
  //     .replace(":clientId", client.value.info.clientId)
  //     .replace(":examId", exam.examId) +
  //     url1 ===
  //     currentRoute.path || child
  // );
  const parent = url1 === currentRoute.path.split("/").slice(-1)[0];
  const child = url2?.some(
    (url) => url === currentRoute.path.split("/").slice(-1)[0]
  );
  // console.log(url1, url2, url1 === currentRoute.path.split("/").slice(-1)[0] || child, currentRoute.path);
  return parent || child;
};
</script>

<style lang="scss">
.sidebar-wrapper {
  width: 212px;
  border-width: 0 1px 0 0;
  border-style: solid;
  border-color: #e5e7eb;
  margin-top: 58px;
  height: calc(100% - 72px);
  background-color: rgb(255, 254, 254);
}

ul {
  padding: 0;
}

.sidebar-item {
  cursor: pointer;
  padding: 16px 16px 16px 10px;
  border-left: 5px solid transparent;
  box-sizing: border-box;
  color: $secondary-300;
  font-weight: bold;
  position: relative;
}

.sidebar-item {
  svg {
    font-size: 1.5rem;
  }
}

.sidebar-item:hover,
.active-sidebar-item {
  border-left: 5px solid $main-green-500;
  color: $main-green-500;

  &.submenu {
    color: $main-green-500;
  }
}

.childs-item {
  padding-left: 54px;

  .active-submenu-item {
    color: $main-green-500;
  }
}

.childs-item {
  li {
    color: $secondary-300;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
}

.childs-item {
  li:hover {
    color: $main-green-500;
    cursor: pointer;
  }
}

.submenu-arrow {
  position: absolute;
  right: 10px;
}
</style>
