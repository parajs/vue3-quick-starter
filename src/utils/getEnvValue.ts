/**
 * 获取环境值
 * @param key
 * @returns
 */
export function getEnvValue(key: string) {
  return import.meta.env[key] as string
}
