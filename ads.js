/* User-provided HilltopAds tags. Load only on the Cuecraft workspace. */
(function () {
  'use strict';
  const banner = document.getElementById('ad-banner');
  const creative = document.getElementById('banner-creative');
  const viewport = document.getElementById('banner-viewport');
  const close = document.getElementById('close-ad');
  const integration = document.getElementById('hilltopads-integration');
  if (!banner || !creative || !viewport || !close || !integration) return;

  // HILLTOPADS_BANNER_START: User-provided banner; one load per page visit.
  let dismissed = false;
  let frame = 0;
  function fitBanner() {
    frame = 0;
    if (dismissed) return;
    const width = creative.scrollWidth;
    const height = creative.offsetHeight;
    const filled = width > 0 && height > 0;
    const scale = filled ? Math.min(1, viewport.clientWidth / width, 180 / height) : 1;
    creative.style.setProperty('--ad-scale', String(scale));
    viewport.style.height = `${Math.ceil(height * scale)}px`;
    banner.dataset.empty = String(!filled);
    banner.inert = !filled;
  }
  function scheduleFit() {
    if (!dismissed && !frame) frame = requestAnimationFrame(fitBanner);
  }
  close.addEventListener('click', () => {
    dismissed = true;
    banner.classList.add('is-dismissed');
    banner.inert = true;
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(scheduleFit).observe(creative);
  new MutationObserver(scheduleFit).observe(creative, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['width', 'height']
  });
  window.addEventListener('resize', scheduleFit);
  fitBanner();
  const script = document.createElement('script');
  script.id = 'hilltopads-banner-loader';
  script.dataset.adStatus = 'loading';
  script.settings = {};
  script.src = 'https://shameful-farm.com/b.XBVbsqdiGRlx0/YNWmcu/EeNmP9Qu/ZQUml/kJPPTPcJ1iOhTAgO2rM/TrMgtfNfzNUV5UOqDzYGxXNjwB';
  script.async = true;
  script.referrerPolicy = 'no-referrer-when-downgrade';
  script.addEventListener('load', () => { script.dataset.adStatus = 'loaded'; scheduleFit(); });
  script.addEventListener('error', () => { script.dataset.adStatus = 'error'; });
  creative.appendChild(script);
  // HILLTOPADS_BANNER_END

  // HILLTOPADS_POPUP_START: Direct offer URL, not a script URL.
  const offerUrl = 'https://bold-consequence.com/bC3MV.0GPS3VpyvQbGmGVdJZZSDV0Z3ONsTMkc4/N_jJAv1PLXTScs1JOkT/gx2jM/D/kw';
  let attempted = false;
  document.addEventListener('click', event => {
    const button = event.target.closest && event.target.closest('#convert, #save, #copy');
    if (attempted || !event.isTrusted || !button || button.disabled) return;
    attempted = true;
    integration.dataset.popupStatus = 'attempted';
    // Run within the user's click before asynchronous operations consume the gesture.
    // Do not cancel the original conversion, download or copy action.
    try {
      window.open(offerUrl, '_blank', 'noopener,noreferrer');
    } catch {
      integration.dataset.popupStatus = 'error';
    }
  }, { capture: true });
  // HILLTOPADS_POPUP_END
})();
