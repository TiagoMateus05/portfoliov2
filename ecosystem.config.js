module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: '.output/server/index.mjs',
      instances: 1,
      exec_mode: 'cluster', // or 'cluster' if you want multi-core
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}

