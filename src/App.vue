<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 553588 */
  src: url('//at.alicdn.com/t/font_553588_hzzp0ivg3606n7b9.eot');
  src: url('//at.alicdn.com/t/font_553588_hzzp0ivg3606n7b9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_553588_hzzp0ivg3606n7b9.woff') format('woff'),
  url('//at.alicdn.com/t/font_553588_hzzp0ivg3606n7b9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_553588_hzzp0ivg3606n7b9.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
html{
    font-size: 625%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.04);
}
body{
  background-color: #fff;
}
a {
  text-decoration: none;
  // display: block;
}
</style>
