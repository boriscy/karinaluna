export default {
  methods: {
    /**
     *
     * @param {Function} callback
     * @param {Integer} wait
     * @param {Object} context
     * @returns {Function}
     */
    throttle (callback, wait, context = this) {
      let timeout = null
      let callbackArgs = null

      const later = () => {
        callback.apply(context, callbackArgs)
        timeout = null
      }

      return function() {
        if (!timeout) {
          callbackArgs = arguments
          timeout = setTimeout(later, wait)
        }
      }
    },
    debounce (callback, wait, context = this) {
      let timeout = null
      let callbackArgs = null

      const later = () => callback.apply(context, callbackArgs)

      return function() {
        callbackArgs = arguments
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }
  }
}