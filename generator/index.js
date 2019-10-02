module.exports = (api, options, rootOptions) => {
  if (options.confirm) {
    api.render('./template', {
      ...options,
    })
  }
}