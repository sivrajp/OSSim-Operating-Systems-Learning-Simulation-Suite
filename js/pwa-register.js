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
        initMobileDrawer();
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

    // 4. Initialize Mobile Navigation Drawer (8 Canonical Environments & Suite Actions)
    function initMobileDrawer() {
        const menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
        const drawerCloseBtn = document.getElementById('drawer-close-btn');
        const backdrop = document.getElementById('drawer-backdrop');
        const drawerNavItems = document.querySelectorAll('.drawer-nav-item');

        if (menuToggleBtn) {
            menuToggleBtn.addEventListener('click', () => toggleDrawer(true));
        }

        if (drawerCloseBtn) {
            drawerCloseBtn.addEventListener('click', () => toggleDrawer(false));
        }

        if (backdrop) {
            backdrop.addEventListener('click', () => toggleDrawer(false));
        }

        // Drawer navigation items
        drawerNavItems.forEach((item) => {
            item.addEventListener('click', () => {
                const targetTabId = item.getAttribute('data-tab');
                if (!targetTabId) return;

                // Sync active class in drawer
                drawerNavItems.forEach((d) => d.classList.remove('active'));
                item.classList.add('active');

                // Trigger desktop tab click to execute core suite routing
                triggerTabSwitch(targetTabId);
                toggleDrawer(false);

                const viewport = document.getElementById('app-viewport');
                if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Sync drawer active tab when tab is changed via other triggers (e.g. cards)
        const desktopTabs = document.querySelectorAll('.nav-tab-btn');
        desktopTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                if (tabId) {
                    drawerNavItems.forEach((item) => {
                        if (item.getAttribute('data-tab') === tabId) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        });

        // Drawer suite actions
        const dashboardBtn = document.getElementById('drawer-btn-dashboard');
        const syncBtn = document.getElementById('drawer-btn-sync');
        const guidesBtn = document.getElementById('drawer-btn-guides');

        if (dashboardBtn) {
            dashboardBtn.addEventListener('click', () => {
                toggleDrawer(false);
                const target = document.getElementById('header-btn-dashboard');
                if (target) target.click();
            });
        }

        if (syncBtn) {
            syncBtn.addEventListener('click', () => {
                toggleDrawer(false);
                const target = document.getElementById('header-btn-sync');
                if (target) target.click();
            });
        }

        if (guidesBtn) {
            guidesBtn.addEventListener('click', () => {
                toggleDrawer(false);
                const target = document.getElementById('header-btn-guides');
                if (target) target.click();
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggleDrawer(false);
            }
        });
    }

    function toggleDrawer(open) {
        const drawer = document.getElementById('mobile-nav-drawer');
        if (!drawer) return;
        if (open) {
            drawer.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        } else {
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function triggerTabSwitch(targetTabId) {
        const desktopTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${targetTabId}"]`);
        if (desktopTabBtn) {
            desktopTabBtn.click();
        } else {
            // Fallback direct view toggle
            document.querySelectorAll('.tab-view').forEach((v) => v.classList.remove('active'));
            const targetView = document.getElementById(`tab-view-${targetTabId}`);
            if (targetView) targetView.classList.add('active');
        }
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
