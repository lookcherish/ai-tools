import { parseUrl } from '@/utils/shared'

export function useInit() {
  onShow(() => {
    console.log('Page Show')
  })
  onHide(() => {
    console.log('Page Hide')
  })
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  // @ts-expect-error
  const { fullPath } = page.$page
  console.log('fullPath', fullPath)
  const { name: pageName, path: pagePath, query: pageQuery } = parseUrl(fullPath)
  // decodeURIComponent解码，防止页面传值的时候中文乱码
  Object.keys(pageQuery).forEach((key) => {
    pageQuery[key] = decodeURIComponent(pageQuery?.[key] ?? '')
  })
  return {
    pageName,
    pagePath,
    pageQuery,
  }
}
