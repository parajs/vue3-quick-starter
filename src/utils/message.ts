import { Message, type MessageConfig } from '@arco-design/web-vue'
import '@arco-design/web-vue/es/message/style/index.js'
import type { AppContext } from 'vue'
export function messageInfo(config: string | MessageConfig, appContext?: AppContext) {
  return Message.info(config, appContext ?? (window.AppContext as AppContext))
}

export function messageSuccess(config: string | MessageConfig, appContext?: AppContext) {
  return Message.success(config, appContext ?? (window.AppContext as AppContext))
}

export function messageWarning(config: string | MessageConfig, appContext?: AppContext) {
  return Message.warning(config, appContext ?? (window.AppContext as AppContext))
}

export function messageError(config: string | MessageConfig, appContext?: AppContext) {
  return Message.error(config, appContext ?? (window.AppContext as AppContext))
}

export function messageLoading(config: string | MessageConfig, appContext?: AppContext) {
  return Message.loading(config, appContext ?? (window.AppContext as AppContext))
}

export function messageNormal(config: string | MessageConfig, appContext?: AppContext) {
  return Message.normal(config, appContext ?? (window.AppContext as AppContext))
}
