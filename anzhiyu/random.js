var posts=["2025/09/17/测试/","2025/09/17/测试测试/","2025/09/17/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };