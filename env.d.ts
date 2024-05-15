/// <reference types="vite/client" />
declare type KVObject = Record<string, any>
interface Window {
  AppContext: KVObject //加入对象
}
