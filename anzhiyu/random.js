var posts=["2025/09/17/测试/","2025/09/17/这是一篇新的博文/","2025/09/17/阿凡达1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };