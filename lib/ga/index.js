import {configs} from "../../config"

export const pageview = (url) => {
    window.gtag('config', `${configs.ga}`, {
      page_path: url,
    })
  }