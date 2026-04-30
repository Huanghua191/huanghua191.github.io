// 小伴 Service Worker - 基础缓存版
const CACHE_NAME = 'xiaoban-v1';
const FILES_TO_CACHE = [
  '.' // 缓存当前页面
];

// 安装时缓存文件
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// 拦截请求，先找缓存
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});