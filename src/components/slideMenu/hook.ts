import {ref} from 'vue'
export default function getSlideMenuHook() {
    const menuList = ref([
        {
          index: 0,
          name: '嗨吃大餐'
        }
        // {
        //   index: 1,
        //   name: '猪吃肉肉'
        // },
        // {
        //   index: 2,
        //   name: '小猪爆炒'
        // },
        // {
        //   index: 3,
        //   name: '煲锅猪汤'
        // },
        // {
        //   index: 4,
        //   name: '甜宝猪咪'
        // },
        // {
        //   index: 5,
        //   name: '鲜灵菜猪'
        // },
        // {
        //   index: 6,
        //   name: '小猪独食'
        // },
        // {
        //   index: 7,
        //   name: '猪一锅出'
        // }
      ])
    function getMenuList():void {
        
    }
    function getMenuName(item: Object): void {
        console.log(item, "看下我可以获取到item嘛");
      };
    return {
        menuList,
        getMenuName
    }
}