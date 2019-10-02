module.exports = (api, options, rootOptions) => {
  if (options.confirm) {
    api.render('./template', {
      ...options,
    })

    api.extendPackage({
      dependencies: {
        'tailwindcss': '^1.1.2'
      }
    })
  }
}