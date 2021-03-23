<template>
  <div id="nav">
    <transition name="fade">
      <div id="menu" :class="{ active: isActive }" v-if="isActive">
        <ul @click="links">
          <li class="link1">
            <router-link to="/">Home</router-link>
          </li>
          <li class="link2">
            <router-link to="/serials">Serials</router-link>
          </li>
          <li class="link3"><router-link to="/cart">Cart</router-link></li>
          <li class="link4"><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </transition>
    <div class="icon" @click="menu">
      {{ textMenu }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textMenu: "Menu",
      isActive: false
    };
  },
  methods: {
    menu() {
      if (this.isActive == false) {
        this.isActive = true;
        this.textMenu = "Back";
      } else {
        this.textMenu = "Menu";
        this.isActive = false;
      }
    },
    links() {
      this.textMenu = "Menu";
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss">
#nav {
  height: 95vh;
  overflow: hidden;
  position: absolute;
  z-index: 30;
  #menu {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: rgb(0, 0, 0);

    ul {
      margin: 0;
      padding: 0;
      height: 100vh;
      list-style-type: none;
      li a {
        display: block;
        text-decoration: none;
        font-size: 12rem;
        color: rgb(20, 19, 19);
        text-align: center;
        &.router-link-exact-active.router-link-active {
          color: #f4f0ec;
        }
      }

      .link1 {
        transition: all 3s ease-in-out;
        transform: translateX(-250px);
      }
      .link2 {
        transition: all 3s ease-in-out;
        transform: translateX(250px);
      }
      .link3 {
        transition: all 3s ease-in-out;
        transform: translateX(-250px);
      }
      .link4 {
        transition: all 3s ease-in-out;
        transform: translateX(250px);
      }
    }
  }
  .icon {
    position: fixed;
    z-index: 2;
    background: #f1f1f1;
    top: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    border: 1px solid #333;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
