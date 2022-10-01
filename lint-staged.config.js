module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': () => [`yarn lint:fix`, `yarn format`],

  // Format MarkDown and JSON
  '**/*.(md|json)': () => `yarn format`,
}
