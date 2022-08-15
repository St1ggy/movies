const withOpacityValue =
  (variable) =>
  ({ opacityValue }) =>
    `rgb(var(${variable})${opacityValue == null ? '' : ` / ${opacityValue}`})`

module.exports.colors = {
  primary: withOpacityValue('--col-primary'),
  secondary: withOpacityValue('--col-secondary'),
  page: withOpacityValue('--col-page'),
  'page-content': withOpacityValue('--col-page-content'),
  success: withOpacityValue('--col-success'),
  info: withOpacityValue('--col-info'),
  warning: withOpacityValue('--col-warning'),
  danger: withOpacityValue('--col-danger'),
  black: withOpacityValue('--col-black'),
  white: withOpacityValue('--col-white'),
}
