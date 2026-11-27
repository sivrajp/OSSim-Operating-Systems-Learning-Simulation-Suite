/**
 * OSSim Mobile PWA — High-Performance Offline Service Worker
 * (C) Copyright Sivraj P. All rights reserved.
 */

const CACHE_NAME = 'ossim-pwa-v1.2.0';

const PRECACHE_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './js/ossim_bundle.js',
    './js/pwa-register.js',
    './css/theme.css',
    './css/desktop.css',
    './css/visualizers.css',
    './css/mobile.css',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-192.png',
    './icons/icon-maskable-512.png',
    './icons/apple-touch-icon.png',
    './icons/favicon.ico'
];

// Install: Cache all critical assets for full offline usage
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[OSSim SW] Pre-caching offline simulation assets...');
            return cache.addAll(PRECACHE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate: Purge old cache versions belonging strictly to OSSim namespace
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name.startsWith('ossim-pwa-') && name !== CACHE_NAME) {
                        console.log('[OSSim SW] Purging obsolete OSSim cache:', name);
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Network-First for HTML & CSS (ensures instant live updates, offline fallback), Cache-First for static bundles
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    const isHtmlOrCss = event.request.mode === 'navigate' ||
                        (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) ||
                        url.pathname.endsWith('.html') ||
                        url.pathname.endsWith('.css') ||
                        url.pathname.endsWith('pwa-register.js');

    if (isHtmlOrCss) {
        // Network-First: Always fetch freshest styles and markup when online
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(event.request).then((cached) => cached || caches.match('./index.html'));
                })
        );
        return;
    }

    // Cache-First with background revalidation for bundles and media
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
                    }
                }).catch(() => {});
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
                return networkResponse;
            });
        })
    );
});
