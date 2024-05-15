import { getEnvValue } from '@/utils'
import axios from 'axios'
const apiPrefix = getEnvValue('VITE_API_PREFIX')

/**
 * 获取记录
 * @param data
 * @returns
 */
export function recordList(data?: KVObject): Promise<KVObject> {
  return axios.post(`${apiPrefix}/record/list`, data)
}
