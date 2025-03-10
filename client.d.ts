declare module 'vue-router/auto-routes' {
  import type { RouteRecordRaw, Router } from 'vue-router'

  /**
   * Array of routes generated by unplugin-vue-router
   */
  export const routes: RouteRecordRaw[]

  /**
   * Setups hot module replacement for routes.
   * @param router - The router instance
   * @param hotUpdateCallback - Callback to be called after replacing the routes and before the navigation
   * @example
   * ```ts
   * import { createRouter, createWebHistory } from 'vue-router'
   * import { routes, handleHotUpdate } from 'vue-router/auto-routes'
   * const router = createRouter({
   *   history: createWebHistory(),
   *   routes,
   * })
   * if (import.meta.hot) {
   * handleHotUpdate(router)
   * }
   * ```
   */
  export function handleHotUpdate(
    router: Router,
    hotUpdateCallback?: (newRoutes: RouteRecordRaw[]) => void
  ): void
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto-routes'

  export interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}

// FIXME: remove vue-router/auto in next major

/**
 * @deprecated Directly import from 'vue-router' instead
 */
declare module 'vue-router/auto' {
  // reexport all types that are not augmented by unplugin-vue-router
  export * from 'vue-router'

  export { definePage } from 'unplugin-vue-router/runtime'
  // Experimental Data Fetching
  export {
    DataLoaderPlugin,
    NavigationResult,
  } from 'unplugin-vue-router/data-loaders'
  // must be added to the virtual vue-router/auto
  // FIXME: is there a way to achieve this without losing the types?
  // export { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'
  // export { defineColadaLoader } from 'unplugin-vue-router/data-loaders/pinia-colada'
}

// Make the macros globally available
declare global {
  const definePage: (typeof import('unplugin-vue-router/runtime'))['definePage']
}

export {}
