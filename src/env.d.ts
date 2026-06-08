interface HCaptcha {
  reset: () => void;
}

interface Window {
  hcaptcha: HCaptcha;
}
