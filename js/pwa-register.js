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

    // 4. Synchronize Mobile Bottom Navigation with OSSim Master Tabs
    function initBottomNavigation() {
        const bottomNav = document.getElementById('mobile-bottom-nav');
        if (!bottomNav) return;

        const navItems = bottomNav.querySelectorAll('.mobile-nav-item');

        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                // Check if this is the "More / All" button
                if (item.id === 'mobile-nav-more-btn') {
                    toggleDrawer(true);
                    return;
                }

                const targetTabId = item.getAttribute('data-tab');
                if (!targetTabId) return;

                // 1. Update active item state in bottom nav & drawer
                syncActiveTab(targetTabId);

                // 2. Trigger click on existing desktop header tab button to execute core suite routing
                triggerTabSwitch(targetTabId);

                // 3. Scroll active bottom nav button into view
                item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

                // 4. Scroll to top of viewport
                const viewport = document.getElementById('app-viewport');
                if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Listen to desktop tab changes to keep mobile bottom nav & drawer in sync
        const desktopTabs = document.querySelectorAll('.nav-tab-btn');
        desktopTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                if (tabId) {
                    syncActiveTab(tabId);
                    const matchingBottomItem = bottomNav.querySelector(`.mobile-nav-item[data-tab="${tabId}"]`);
                    if (matchingBottomItem) {
                        matchingBottomItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                }
            });
        });
    }

    function syncActiveTab(tabId) {
        document.querySelectorAll('.mobile-nav-item').forEach((item) => {
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            } else if (item.id !== 'mobile-nav-more-btn') {
                item.classList.remove('active');
            }
        });
        document.querySelectorAll('.drawer-nav-item').forEach((item) => {
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
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

    // 5. Initialize Mobile Navigation Drawer (8 Environments & Suite Actions)
    function initMobileDrawer() {
        const menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
        const drawerCloseBtn = document.getElementById('drawer-close-btn');
        const backdrop = document.getElementById('drawer-backdrop');

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
        const drawerNavItems = document.querySelectorAll('.drawer-nav-item');
        drawerNavItems.forEach((item) => {
            item.addEventListener('click', () => {
                const targetTabId = item.getAttribute('data-tab');
                if (!targetTabId) return;

                syncActiveTab(targetTabId);
                triggerTabSwitch(targetTabId);
                toggleDrawer(false);

                const matchingBottomItem = document.querySelector(`.mobile-nav-item[data-tab="${targetTabId}"]`);
                if (matchingBottomItem) {
                    matchingBottomItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }

                const viewport = document.getElementById('app-viewport');
                if (viewport) viewport.scrollTo({ top: 0, behavior: 'smooth' });
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
