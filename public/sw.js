const CACHE_NAME = "supportbuy-v1";

self.addEventListener(
  "install",
  (event) => {
    console.log(
      "[Service Worker] Installing...",
    );
    self.skipWaiting();
  },
);

self.addEventListener(
  "activate",
  (event) => {
    console.log(
      "[Service Worker] Activating...",
    );
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map(
              (cacheName) => {
                if (
                  cacheName !==
                  CACHE_NAME
                ) {
                  console.log(
                    "[Service Worker] Deleting old cache:",
                    cacheName,
                  );
                  return caches.delete(
                    cacheName,
                  );
                }
              },
            ),
          );
        }),
    );
    self.clients.claim();
  },
);

self.addEventListener(
  "fetch",
  (event) => {
    if (event.request.method !== "GET")
      return;

    event.respondWith(
      caches
        .match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }

          return fetch(event.request)
            .then((response) => {
              if (
                !response ||
                response.status !==
                  200 ||
                response.type ===
                  "error"
              ) {
                return response;
              }

              const responseToCache =
                response.clone();
              caches
                .open(CACHE_NAME)
                .then((cache) => {
                  cache.put(
                    event.request,
                    responseToCache,
                  );
                });

              return response;
            })
            .catch(() => {
              console.log(
                "[Service Worker] Fetch failed, returning cached or offline response",
              );
              return caches.match("/");
            });
        }),
    );
  },
);
