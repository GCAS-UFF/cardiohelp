'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assets/interactive.png": "6c9ac541ceed96478e5a6e9fa18698b4",
"/assets/assets/attention.png": "47d768cc4f9ebb803a7309dc1b90ca44",
"/assets/assets/fonts/Attention.ttf": "fdc2ce560cfed4716f72055c825bd9fe",
"/assets/assets/fonts/MyFlutterApp.ttf": "82b8bc200374684266d707b77635af1b",
"/assets/FontManifest.json": "e9387bf2c4a6db6f43855208b6ee3fdf",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/AssetManifest.json": "0bb9b5588a8dd779bd586fa1e4472d66",
"/assets/lib/databases/drugs/drugs.json": "6aeee1637cbbb795ccb99fb66d1316fc",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/manifest.json": "eae741670cb4c18370ee7621732f0644",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/main.dart.js": "7e0e9527c1690330df3a7e525a556192",
"/index.html": "e4ba04425c7e3cc3a3f01c8820516993"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
