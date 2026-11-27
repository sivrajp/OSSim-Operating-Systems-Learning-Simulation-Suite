/**
 * OSSim Mobile PWA Registration & Mobile Navigation Bridge
 * (C) Copyright Sivraj P. All rights reserved.
 */

(function () {
    'use strict';

    let deferredInstallPrompt = null;

    // 1. Service Worker Registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((registration) => {
                    console.log('[OSSim PWA] Service Worker registered successfully with scope:', registration.scope);
                })
                .catch((error) => {
                    console.warn('[OSSim PWA] Service Worker registration failed:', error);
                });
        });
    }

    // 2. Install Prompt Handling
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent default mini-infobar on mobile Chrome
        e.preventDefault();
        deferredInstallPrompt = e;

        // Check if previously dismissed in this session
        if (!sessionStorage.getItem('ossim_pwa_dismissed')) {
            const banner = document.getElementById('pwa-install-banner');
            if (banner) {
                banner.style.display = 'flex';
            }
        }
    });

    window.addEventListener('appinstalled', () => {
        console.log('[OSSim PWA] Application successfully installed.');
        const banner = document.getElementById('pwa-install-banner');
        if (banner) banner.style.display = 'none';
        deferredInstallPrompt = null;
    });

    // 3. Setup Mobile UI Components after DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        initInstallBanner();
        initBottomNavigation();
        initNetworkStatus();
        initOrientationHelper();
    });

    function initInstallBanner() {
        const installBtn = document.getElementById('pwa-install-btn');
        const dismissBtn = document.getElementById('pwa-dismiss-btn');
        const banner = document.getElementById('pwa-install-banner');

        if (installBtn) {
            installBtn.addEventListener('click', async () => {
                if (deferredInstallPrompt) {
                    deferredInstallPrompt.prompt();
                    const { outcome } = await deferredInstallPrompt.userChoice;
                    console.log(`[OSSim PWA] User install choice: ${outcome}`);
                    deferredInstallPrompt = null;
                    if (banner) banner.style.display = 'none';
                }
            });
        }

        if (dismissBtn) {
            dismissBtn.addEventListener('click', () => {
                if (banner) banner.style.display = 'none';
                sessionStorage.setItem('ossim_pwa_dismissed', 'true');
            });
        }
    }

    // 4. Synchronize Mobile Bottom Navigation with OSSim Master Tabs
    function initBottomNavigation() {
        const bottomNav = document.getElementById('mobile-bottom-nav');
        if (!bottomNav) return;

        const navItems = bottomNav.querySelectorAll('.mobile-nav-item');

        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                const targetTabId = item.getAttribute('data-tab');
                if (!targetTabId) return;

                // 1. Update active item state in bottom nav
                navItems.forEach((btn) => btn.classList.remove('active'));
                item.classList.add('active');

                // 2. Trigger click on existing desktop header tab button to execute core suite routing
                const desktopTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${targetTabId}"]`);
                if (desktopTabBtn) {
                    desktopTabBtn.click();
                } else {
                    // Fallback direct view toggle
                    document.querySelectorAll('.tab-view').forEach((v) => v.classList.remove('active'));
                    const targetView = document.getElementById(`tab-view-${targetTabId}`);
                    if (targetView) targetView.classList.add('active');
                }

                // 3. Scroll to top of viewport
                const viewport = document.getElementById('app-viewport');
                if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Also listen to desktop tab changes to keep mobile bottom nav in sync
        const desktopTabs = document.querySelectorAll('.nav-tab-btn');
        desktopTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                navItems.forEach((item) => {
                    if (item.getAttribute('data-tab') === tabId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }

    // 5. Network Status Monitoring
    function initNetworkStatus() {
        const pill = document.getElementById('network-status-pill');
        if (!pill) return;

        function updateStatus() {
            if (navigator.onLine) {
                pill.className = 'offline-status-pill online';
                pill.innerHTML = '● Online';
                pill.title = 'Connected to network';
            } else {
                pill.className = 'offline-status-pill offline';
                pill.innerHTML = '⚡ Offline (Cached)';
                pill.title = 'Running locally from device cache';
            }
        }

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
    }

    // 6. Orientation Helper for Complex Modules
    function initOrientationHelper() {
        const tipBanner = document.getElementById('orientation-tip-banner');
        if (!tipBanner) return;

        function checkOrientation() {
            const isPortrait = window.innerHeight > window.innerWidth;
            const isSmallScreen = window.innerWidth <= 768;
            
            // Check if active view is workshop or desktop
            const activeView = document.querySelector('.tab-view.active');
            const isComplexView = activeView && (
                activeView.id === 'tab-view-workshop' || 
                activeView.id === 'tab-view-desktop'
            );

            if (isPortrait && isSmallScreen && isComplexView) {
                tipBanner.style.display = 'block';
                setTimeout(() => {
                    tipBanner.style.display = 'none';
                }, 4000);
            } else {
                tipBanner.style.display = 'none';
            }
        }

        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);
    }
})();
