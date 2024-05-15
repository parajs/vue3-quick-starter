import dayjs from 'dayjs'

/**
 * 格式化时间
 * @param date
 * @param template
 * @returns
 */
export function dayjsFormat(date: dayjs.ConfigType, template?: string) {
  if (!date) return ''
  return dayjs(date).format(template || 'YYYY-MM-DD HH:mm ')
}
