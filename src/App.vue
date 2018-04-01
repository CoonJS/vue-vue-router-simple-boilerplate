<template>
    <div>
        <div class="menu">
            <router-link
                v-for="item in menuItems"
                :key="item.key"
                :to="item.link"
            >
                <div class="menu-item">
                    {{item.title}}
                </div>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
          {
            key: 'home',
            title: 'Home',
            link: '/'
          },
          {
            key:'page-a',
            title: 'Page A',
            link: 'page-a'
          },
          {
            key:'page-b',
            title: 'Page B',
            link: 'page-b'
          },
        ]
      };
    }
  }
</script>

<style scoped>
    .menu {
        padding: 0 24px;
        background-color: #333;
        display: flex;
    }

    a {
        display: flex;
        height: 100%;
        color: #fff;
        text-decoration: none;
    }

    .menu-item {
        background-color: rgba(51, 51, 51, 1);
        padding: 12px;
    }

    .menu-item:hover {
        background-color: rgba(210, 210, 210, .1);
    }
</style>

