'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "app/assets/AssetManifest.json": "abe3e2f33860f58e0234ac1ad252a721",
"app/assets/assets/fonts/Kalameh_Bold.ttf": "bbd8448e056821340fd2bbf64eba980a",
"app/assets/assets/fonts/MyIcons.ttf": "86a75de49e0164e837c142d179b80cf9",
"app/assets/assets/fonts/Yekan_Bakh_Bold.ttf": "4d99cf9bbda1bcd15ded0a38993adbf7",
"app/assets/assets/fonts/Yekan_Bakh_Medium.ttf": "2599bd836f9a77e57df6be05895041a2",
"app/assets/assets/fonts/Yekan_Bakh_Regular.ttf": "62778b24dc8735e23ccf33bb8822cb30",
"app/assets/assets/images/background_dark.jpg": "b2bec4b8a8ddb235b6d02e9211bd47db",
"app/assets/assets/images/background_light.jpg": "9d465c07a8d189c704de6f81ff1ec35f",
"app/assets/assets/images/car-number-plate.png": "f504b6eb9d356a58d6f1081411d7bed9",
"app/assets/assets/images/logo-icon.png": "0eacebf84680722caf67ad27ad5522f7",
"app/assets/assets/images/logo_type.svg": "1ad01dd37a0cbbe4928dcc67bfc97ec1",
"app/assets/assets/images/price-bar.png": "7fe267855477a64ddfa25086cc34bae7",
"app/assets/choosing-a-car.gif": "38edbbdf275bf8653a9bd93c9d2b614c",
"app/assets/FontManifest.json": "a09b83d488ff0de53c096ffdda5b52a1",
"app/assets/icons/icon-128x128.png": "57bc23e35313e91454bb2b4d069029da",
"app/assets/icons/icon-144x144.png": "85a719c02a197b395dc98afeabdf8ffc",
"app/assets/icons/icon-152x152.png": "f84ba3313d3c2b1f7800f152ad828f63",
"app/assets/icons/icon-192x192.png": "1630c95f163fd97eb843fc5c5ace2074",
"app/assets/icons/icon-384x384.png": "1edfdd146aa431d7db65e7c57b37645b",
"app/assets/icons/icon-48x48.png": "3185f0243fc2eae1501f528c678168b5",
"app/assets/icons/icon-512x512.png": "86a68ce3476eed6dce8eb7dc74a02ce9",
"app/assets/icons/icon-72x72.png": "981827cd37c9251e0bd5d9799fb053bd",
"app/assets/icons/icon-96x96.png": "fae1571b1e0feac0b10eb971a0e26973",
"app/assets/initializing.svg": "c7030815768fb8da09be605989f8b2be",
"app/assets/loading.gif": "068def3f522717c91e5fa3ed1c21e861",
"app/assets/loading.svg": "1037dc5ad3eb1bd5450bdacd0f6df02f",
"app/assets/NOTICES": "047fcce7a842b513c14d39f2f7c75a37",
"app/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"app/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"app/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"app/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"app/assets/Rent-car.gif": "43962bae626cd05a0b56f8545026904d",
"app/assets/running.svg": "544f8049b31db0be7654312bc714fb66",
"app/assets/splash_screens/10.2__iPad_landscape.png": "709d768211f454708dfb504ecd484f02",
"app/assets/splash_screens/10.2__iPad_portrait.png": "0865740e0b4aa2ff9f353908a2862b2e",
"app/assets/splash_screens/10.5__iPad_Air_landscape.png": "9b0a11a354d0f4f59c54ddbe23e45419",
"app/assets/splash_screens/10.5__iPad_Air_portrait.png": "ad3af42ec4257d13d8c01fbae875a6c2",
"app/assets/splash_screens/10.9__iPad_Air_landscape.png": "f549b27bcf23506dcafa1e29be417315",
"app/assets/splash_screens/10.9__iPad_Air_portrait.png": "5b9bf887faa8ed9fdff6f52e3ac370b9",
"app/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png": "fa17d3696a4c78b0d7790815ccaf0757",
"app/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png": "60cd0f408ac3736564f7d76416bbcf0b",
"app/assets/splash_screens/12.9__iPad_Pro_landscape.png": "bd50becf19be9742bd3fc9b4835b5112",
"app/assets/splash_screens/12.9__iPad_Pro_portrait.png": "aec142329a3c228c0424fad853df4790",
"app/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png": "e29df79c3930c4fb8b36b80f8b8509eb",
"app/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png": "d3d58c02bed6dd9e12b7522ebba1ff95",
"app/assets/splash_screens/8.3__iPad_Mini_landscape.png": "26abca9e2c85675cf4e94007af5db515",
"app/assets/splash_screens/8.3__iPad_Mini_portrait.png": "a29dd178b53b3713afd56243d9eca57e",
"app/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png": "d233e03d71443c137caa608057c02127",
"app/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png": "03e469236fcb0f8ba981fff1b0a67399",
"app/assets/splash_screens/icon.png": "bda184528eab05d42cf5359ce2971609",
"app/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png": "961da59400c9d302ab60b5c655932168",
"app/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png": "71a30de8c391affb57cdfc4b55e3104e",
"app/assets/splash_screens/iPhone_11__iPhone_XR_landscape.png": "6f0458f09a2d40db6d94cb5b8f9b31db",
"app/assets/splash_screens/iPhone_11__iPhone_XR_portrait.png": "4af1189e2013289a6ce19a996a172e6f",
"app/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png": "8f8a3ac8b16ad7239c72500c1fb64f83",
"app/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png": "ca00ed98644a29b28556e024f8c4e1d4",
"app/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png": "ac88331d3489bb11b070335c8406d5f5",
"app/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png": "341c7bc894c59d4429864151e64ba5f9",
"app/assets/splash_screens/iPhone_14_Pro_landscape.png": "b81d72911dd81c0bac315c2cf59d77b8",
"app/assets/splash_screens/iPhone_14_Pro_Max_landscape.png": "ba024123f648792a2f06783954202fa3",
"app/assets/splash_screens/iPhone_14_Pro_Max_portrait.png": "918d1a7c413320ac50fb88d8cd9488c9",
"app/assets/splash_screens/iPhone_14_Pro_portrait.png": "20045149e569aef9c833fc3b0242cbd4",
"app/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png": "ebf9b7b5f0da0c275de59c7503beffc7",
"app/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png": "2f0bc9569c421543d92dcdab622d2631",
"app/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png": "10c1e80a620cc1c1520e8c77be82e1d0",
"app/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png": "953e877801b9022a1c61434f142a7550",
"app/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png": "af6a0d0736669f305a748810bd6fe14d",
"app/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png": "540a58f75e835357797b20f74fa817cd",
"app/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"app/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"app/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"app/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"app/favicon.png": "48d82c1d24a47c831fe8f77586ccc927",
"app/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"app/index.html": "83a0dbc7be15167cacf6354c5fc0a6f2",
"/": "c4a7009f9b1fc65f16dc774ce36386ae",
"app/main.dart.js": "0ac00b3ba1ed7e5d131d0406796bbb82",
"app/manifest.json": "248946a2d6bb73c11b5daebfd1718bf0",
"app/version.json": "dbd50f0336b364d6b4009193512a8a92",
"assets/AssetManifest.json": "abe3e2f33860f58e0234ac1ad252a721",
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
"assets/NOTICES": "047fcce7a842b513c14d39f2f7c75a37",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/Rent-car.gif": "43962bae626cd05a0b56f8545026904d",
"assets/running.svg": "544f8049b31db0be7654312bc714fb66",
"assets/splash_screens/10.2__iPad_landscape.png": "709d768211f454708dfb504ecd484f02",
"assets/splash_screens/10.2__iPad_portrait.png": "0865740e0b4aa2ff9f353908a2862b2e",
"assets/splash_screens/10.5__iPad_Air_landscape.png": "9b0a11a354d0f4f59c54ddbe23e45419",
"assets/splash_screens/10.5__iPad_Air_portrait.png": "ad3af42ec4257d13d8c01fbae875a6c2",
"assets/splash_screens/10.9__iPad_Air_landscape.png": "f549b27bcf23506dcafa1e29be417315",
"assets/splash_screens/10.9__iPad_Air_portrait.png": "5b9bf887faa8ed9fdff6f52e3ac370b9",
"assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png": "fa17d3696a4c78b0d7790815ccaf0757",
"assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png": "60cd0f408ac3736564f7d76416bbcf0b",
"assets/splash_screens/12.9__iPad_Pro_landscape.png": "bd50becf19be9742bd3fc9b4835b5112",
"assets/splash_screens/12.9__iPad_Pro_portrait.png": "aec142329a3c228c0424fad853df4790",
"assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png": "e29df79c3930c4fb8b36b80f8b8509eb",
"assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png": "d3d58c02bed6dd9e12b7522ebba1ff95",
"assets/splash_screens/8.3__iPad_Mini_landscape.png": "26abca9e2c85675cf4e94007af5db515",
"assets/splash_screens/8.3__iPad_Mini_portrait.png": "a29dd178b53b3713afd56243d9eca57e",
"assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png": "d233e03d71443c137caa608057c02127",
"assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png": "03e469236fcb0f8ba981fff1b0a67399",
"assets/splash_screens/icon.png": "bda184528eab05d42cf5359ce2971609",
"assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png": "961da59400c9d302ab60b5c655932168",
"assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png": "71a30de8c391affb57cdfc4b55e3104e",
"assets/splash_screens/iPhone_11__iPhone_XR_landscape.png": "6f0458f09a2d40db6d94cb5b8f9b31db",
"assets/splash_screens/iPhone_11__iPhone_XR_portrait.png": "4af1189e2013289a6ce19a996a172e6f",
"assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png": "8f8a3ac8b16ad7239c72500c1fb64f83",
"assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png": "ca00ed98644a29b28556e024f8c4e1d4",
"assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png": "ac88331d3489bb11b070335c8406d5f5",
"assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png": "341c7bc894c59d4429864151e64ba5f9",
"assets/splash_screens/iPhone_14_Pro_landscape.png": "b81d72911dd81c0bac315c2cf59d77b8",
"assets/splash_screens/iPhone_14_Pro_Max_landscape.png": "ba024123f648792a2f06783954202fa3",
"assets/splash_screens/iPhone_14_Pro_Max_portrait.png": "918d1a7c413320ac50fb88d8cd9488c9",
"assets/splash_screens/iPhone_14_Pro_portrait.png": "20045149e569aef9c833fc3b0242cbd4",
"assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png": "ebf9b7b5f0da0c275de59c7503beffc7",
"assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png": "2f0bc9569c421543d92dcdab622d2631",
"assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png": "10c1e80a620cc1c1520e8c77be82e1d0",
"assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png": "953e877801b9022a1c61434f142a7550",
"assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png": "af6a0d0736669f305a748810bd6fe14d",
"assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png": "540a58f75e835357797b20f74fa817cd",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "48d82c1d24a47c831fe8f77586ccc927",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"index.html": "c4a7009f9b1fc65f16dc774ce36386ae",
"main.dart.js": "060ca6223a68ce47a9c883748c8429b1",
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
