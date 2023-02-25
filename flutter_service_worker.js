'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6b7136caad55a6bdd25cc3a91028e54f",
"assets/assets/fonts/Kalameh_Bold.ttf": "bbd8448e056821340fd2bbf64eba980a",
"assets/assets/fonts/MyIcons.ttf": "86a75de49e0164e837c142d179b80cf9",
"assets/assets/fonts/Yekan_Bakh_Bold.ttf": "4d99cf9bbda1bcd15ded0a38993adbf7",
"assets/assets/fonts/Yekan_Bakh_Medium.ttf": "2599bd836f9a77e57df6be05895041a2",
"assets/assets/fonts/Yekan_Bakh_Regular.ttf": "62778b24dc8735e23ccf33bb8822cb30",
"assets/assets/images/background_dark.jpg": "b2bec4b8a8ddb235b6d02e9211bd47db",
"assets/assets/images/background_light.jpg": "9d465c07a8d189c704de6f81ff1ec35f",
"assets/assets/images/car-number-plate.png": "f504b6eb9d356a58d6f1081411d7bed9",
"assets/assets/images/logo-icon.png": "0eacebf84680722caf67ad27ad5522f7",
"assets/assets/images/logo_type.svg": "1ad01dd37a0cbbe4928dcc67bfc97ec1",
"assets/assets/images/price-bar.png": "7fe267855477a64ddfa25086cc34bae7",
"assets/choosing-a-car.gif": "38edbbdf275bf8653a9bd93c9d2b614c",
"assets/FontManifest.json": "a09b83d488ff0de53c096ffdda5b52a1",
"assets/icons/icon-128x128.png": "57bc23e35313e91454bb2b4d069029da",
"assets/icons/icon-144x144.png": "85a719c02a197b395dc98afeabdf8ffc",
"assets/icons/icon-152x152.png": "f84ba3313d3c2b1f7800f152ad828f63",
"assets/icons/icon-192x192.png": "1630c95f163fd97eb843fc5c5ace2074",
"assets/icons/icon-384x384.png": "1edfdd146aa431d7db65e7c57b37645b",
"assets/icons/icon-48x48.png": "3185f0243fc2eae1501f528c678168b5",
"assets/icons/icon-512x512.png": "86a68ce3476eed6dce8eb7dc74a02ce9",
"assets/icons/icon-72x72.png": "981827cd37c9251e0bd5d9799fb053bd",
"assets/icons/icon-96x96.png": "fae1571b1e0feac0b10eb971a0e26973",
"assets/initializing.svg": "c7030815768fb8da09be605989f8b2be",
"assets/loading.gif": "068def3f522717c91e5fa3ed1c21e861",
"assets/loading.svg": "1037dc5ad3eb1bd5450bdacd0f6df02f",
"assets/NOTICES": "7bfe287cf66327db43fcacf90507a3d3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/Rent-car.gif": "43962bae626cd05a0b56f8545026904d",
"assets/running.svg": "544f8049b31db0be7654312bc714fb66",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "48d82c1d24a47c831fe8f77586ccc927",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"index.html": "cb862bd6e04cfcc1385af05c57ec20dc",
"/": "cb862bd6e04cfcc1385af05c57ec20dc",
"main.dart.js": "eac9b8bbbc79457ec2f75ba1888111c1",
"manifest.json": "248946a2d6bb73c11b5daebfd1718bf0",
"version.json": "dbd50f0336b364d6b4009193512a8a92"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
