var posts=["2025/09/17/粤语经典/","2025/09/17/阿凡达1/","2025/09/17/邓紫棋音乐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };