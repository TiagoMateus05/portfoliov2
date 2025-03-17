import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const ua = navigator.userAgent || navigator.vendor
    if (/android|iphone|ipad|ipod/i.test(ua) && to.path !== '/mobile') {
      return navigateTo('/mobile')
    }
  }
})