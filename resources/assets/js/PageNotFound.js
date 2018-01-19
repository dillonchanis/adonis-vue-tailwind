export default {
  name: 'PageNotFound',
  functional: true,
  render: h => (
    <div>
      <h2>404</h2>
      Page Not Found.
      <router-link to={ 'dashboard' }>Dashboard</router-link>
    </div>
  )
}
