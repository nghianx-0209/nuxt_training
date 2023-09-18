<template>
  <div class="sidebar-wrapper">
    <div class="item-list">
      <ul>
        <li v-for="(item, index) in route">
          <div
            class="sidebar-item"
            :class="{ 'active-sidebar-item': index == active_index }"
            v-on:click="() => clickHandle(index, url)"
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
              <li v-for="(child) in item.childs" v-on:click="() => clickHandleSubItem(index, child.url)">{{ child?.name }}</li>
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
import route from "@/routes/router1";
export default {
  components: {
    HomeIcon,
    AdjustmentIcon,
    UsersGroup,
    ViewGrid,
    ClipboardList,
    Mail
  },
  data() {
    return {
      active_index: 0,
      showSubMenu: route.map(() => true)
    };
  },
  methods: {
    clickHandle(id, url) {
      console.log(url)
      this.active_index = id;
      this.showSubMenu[id] = !this.showSubMenu[id];
    },

    clickHandleSubItem(id, url) {
      this.active_index = id;
    }
  }
};
</script>

<script setup>
defineProps({
  active_index: {
    type: Number,
    default: 0,
  }
});
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

.sidebar-item svg {
  font-size: 1.5rem;
}

.sidebar-item:hover,
.active-sidebar-item {
  border-left: 5px solid $main-green-500;
  color: $main-green-500;
}

.childs-item {
  padding-left: 54px;
}

.childs-item li {
  color: $secondary-300;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.childs-item li:hover {
  color: $main-green-500;
  cursor: pointer;
}

.submenu-arrow {
  position: absolute;
  right: 10px;
}
</style>
