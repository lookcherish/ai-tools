export const useTitle = () => {
  let oldValue = 'Hello'
  let newValue = 'Word'
  const title = ref(oldValue)
  function changeTitle() {
    oldValue = title.value
    title.value = newValue
    newValue = oldValue
  }
  function changeNavBarTitle(newValue: string = '页面') {
    console.log('newValue', newValue)
    uni.setNavigationBarTitle({ title: newValue })
  }
  return {
    title,
    changeTitle,
    changeNavBarTitle,
  }
}
