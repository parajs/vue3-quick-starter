import { Modal, type ModalConfig } from '@arco-design/web-vue'
import type { AppContext } from 'vue'
import '@arco-design/web-vue/es/modal/style/index.js'
export function ModalWarning(config: ModalConfig, appContext?: AppContext) {
  return Modal.warning(config, appContext ?? (window.AppContext as AppContext))
}
export function ModalInfo(config: ModalConfig, appContext?: AppContext) {
  return Modal.info(config, appContext ?? (window.AppContext as AppContext))
}
export function ModalSuccess(config: ModalConfig, appContext?: AppContext) {
  return Modal.success(config, appContext ?? (window.AppContext as AppContext))
}
export function ModalError(config: ModalConfig, appContext?: AppContext) {
  return Modal.error(config, appContext ?? (window.AppContext as AppContext))
}
export function ModalOpen(config: ModalConfig, appContext?: AppContext) {
  return Modal.open(config, appContext ?? (window.AppContext as AppContext))
}
export function ModalConfirm(config: ModalConfig, appContext?: AppContext) {
  return Modal.confirm(config, appContext ?? (window.AppContext as AppContext))
}
