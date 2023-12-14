import piniaPluginPersist from 'pinia-plugin-persist-uni'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersist)

export default store
