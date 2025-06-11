// Mobile app utilities and PWA functionality

export interface PWAInstallPrompt {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

declare global {
  interface Window {
    deferredPrompt?: PWAInstallPrompt;
  }
}

export class MobileAppUtils {
  private static instance: MobileAppUtils;
  private installPrompt: PWAInstallPrompt | null = null;

  static getInstance(): MobileAppUtils {
    if (!MobileAppUtils.instance) {
      MobileAppUtils.instance = new MobileAppUtils();
    }
    return MobileAppUtils.instance;
  }

  init(): void {
    this.setupPWAInstallPrompt();
    this.setupMobileGestures();
    this.optimizeForMobile();
  }

  private setupPWAInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installPrompt = e as any;
    });
  }

  canInstallPWA(): boolean {
    return this.installPrompt !== null;
  }

  async promptInstall(): Promise<boolean> {
    if (!this.installPrompt) return false;

    try {
      await this.installPrompt.prompt();
      const result = await this.installPrompt.userChoice;
      this.installPrompt = null;
      return result.outcome === 'accepted';
    } catch (error) {
      console.warn('PWA install prompt failed:', error);
      return false;
    }
  }

  private setupMobileGestures(): void {
    // Touch gesture handling for calculator interactions
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipeGesture(touchStartY, touchEndY);
    });
  }

  private handleSwipeGesture(startY: number, endY: number): void {
    const threshold = 50;
    const diff = startY - endY;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe up - could trigger results sharing
        this.triggerSwipeUp();
      } else {
        // Swipe down - could trigger calculator reset
        this.triggerSwipeDown();
      }
    }
  }

  private triggerSwipeUp(): void {
    const event = new CustomEvent('mobile-swipe-up');
    document.dispatchEvent(event);
  }

  private triggerSwipeDown(): void {
    const event = new CustomEvent('mobile-swipe-down');
    document.dispatchEvent(event);
  }

  private optimizeForMobile(): void {
    // Prevent zoom on double-tap for calculator buttons
    document.addEventListener('touchend', (e) => {
      const target = e.target as Element;
      if (target.closest('.calculator-button, .btn-poe, button')) {
        e.preventDefault();
      }
    });

    // Optimize viewport for mobile
    this.setMobileViewport();
  }

  private setMobileViewport(): void {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    }
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  isTouch(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  getDeviceInfo(): {
    isMobile: boolean;
    isTouch: boolean;
    platform: string;
    userAgent: string;
  } {
    return {
      isMobile: this.isMobile(),
      isTouch: this.isTouch(),
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };
  }

  // Offline support utilities
  isOnline(): boolean {
    return navigator.onLine;
  }

  setupOfflineDetection(): void {
    window.addEventListener('online', () => {
      this.handleOnlineStatusChange(true);
    });

    window.addEventListener('offline', () => {
      this.handleOnlineStatusChange(false);
    });
  }

  private handleOnlineStatusChange(isOnline: boolean): void {
    const event = new CustomEvent('network-status-change', {
      detail: { isOnline }
    });
    document.dispatchEvent(event);
  }
}

// Service Worker for offline functionality
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.warn('Service Worker registration failed:', error);
    }
  }
};

// Initialize mobile utils
export const mobileApp = MobileAppUtils.getInstance();