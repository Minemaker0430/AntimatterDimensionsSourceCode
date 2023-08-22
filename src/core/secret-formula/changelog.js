export const changelog = [
  /**
   * @template
   * {
   *  @property {Array: Number} date  Date of the release of the update, stored in order of year-month-date.
   *  @property {String} name         Name of the update entry. Optional.
   *  @property {Number} id           Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info  Text body of information for the entry.
   * }
   */
  {
    date: [2023, 8, 22],
    name: "First Mod Release",
    info: `
I have officially released the first version of the mod, with one included prestige layer after Celestials (where the typical endgame is). More prestiges to come. Have fun!
`
  }
];


for (let i = 0; i < changelog.length; i++) {
  changelog[i].id = i;
}
