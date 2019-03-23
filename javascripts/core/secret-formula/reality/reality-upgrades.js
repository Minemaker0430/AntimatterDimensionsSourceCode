GameDatabase.reality.upgrades = (function () {
  const rebuyable = props => {
    props.cost = () => getCostWithLinearCostScaling(
      player.reality.rebuyables[props.id],
      1e30,
      props.initialCost,
      props.costMult
    );
    const effect = props.effect;
    props.effect = () => Math.pow(effect, player.reality.rebuyables[props.id]);
    props.formatEffect = value => formatX(value, 2, 2);
    return props;
  };
  return [
    rebuyable({
      id: 1,
      initialCost: 1,
      costMult: 30,
      description: "You gain Dilated Time 3 times faster",
      effect: 3
    }),
    rebuyable({
      id: 2,
      initialCost: 2,
      costMult: 30,
      description: "You gain Replicanti 3 times faster",
      effect: 3
    }),
    rebuyable({
      id: 3,
      initialCost: 2,
      costMult: 30,
      description: "You gain 3 times more Eternities",
      effect: 3
    }),
    rebuyable({
      id: 4,
      initialCost: 3,
      costMult: 30,
      description: "You gain 3 times more Tachyon Particles",
      effect: 3
    }),
    rebuyable({
      id: 5,
      initialCost: 4,
      costMult: 50,
      description: "You gain 5 times more Infinities",
      effect: 5
    }),
    {
      id: 6,
      cost: 15,
      requirement: "Reach first Eternity without getting any RGs during that Eternity",
      description: "Replicanti gain is boosted from RGs",
      effect: () => 1 + (player.replicanti.galaxies / 50),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 7,
      cost: 15,
      requirement: "Reach first Infinity with just 1 galaxy",
      description: "Infinitied stat gain is boosted from Antimatter Galaxies",
      effect: () => 1 + (player.galaxies / 30),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 8,
      cost: 15,
      description: "Tachyon Particle gain is multiplied based on achievement multiplier",
      requirement: "Have the first 13 rows of achievements when you Infinity the first time",
      effect: () => player.achPow.pow(getAdjustedGlyphEffect("effarigachievement")).sqrt(),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 9,
      cost: 15,
      requirement: "Reality with only a single glyph with a level 3 or higher equipped.",
      description: "Gain another glyph slot"
    },
    {
      id: 10,
      cost: 15,
      requirement: "Do your first Eternity with 1e400 IP",
      description: "Start with 100 Eternities"
    },
    {
      id: 11,
      cost: 50,
      requirement: "1,000,000,000,000 banked Infinities",
      description: "Gain 10% of the Infinities you would gain by Infinitying each second.",
      effect: () => gainedInfinities().times(0.1).floor(),
      formatEffect: value => `${shorten(value)} per second`
    },
    {
      id: 12,
      cost: 50,
      requirement: "1e70 EP without EC1",
      description: "EP mult based on Realities and TT",
      effect: () => player.timestudy.theorem.minus(1e3).clampMin(2).pow(Math.log2(player.realities)).clampMin(1),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 13,
      cost: 50,
      requirement: "e3500 EP without TD5",
      description: "More Eternity autobuyer options, EP multiplier autobuyer, Time Dimension autobuyers"
    },
    {
      id: 14,
      cost: 50,
      requirement: "1,000,000 Eternities",
      description: "Gain Eternities per second equal to your Realities",
      effect: () => player.realities,
      formatEffect: value => `${shorten(value)} per second`
    },
    {
      id: 15,
      cost: 50,
      requirement: "Reach 1e10 EP without purchasing the 5xEP upgrade",
      description: "Multiply TP gain based on EP mult",
      effect: () => Math.max(Math.sqrt(Decimal.log10(player.epmult)) / 3, 1),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 16,
      cost: 1500,
      requirement: "Reality with 4 glyphs with uncommon or better rarity",
      description: "Improve the glyph rarity formula",
      effect: () => 1.3
    },
    {
      id: 17,
      cost: 1500,
      requirement: "Reality with 4 glyphs, with each having 2 effects",
      description: "50% chance to get +1 effect on glyphs"
    },
    {
      id: 18,
      cost: 1500,
      requirement: "Reality with 4 level 10 or higher glyphs equipped.",
      description: "Eternities affect glyph level",
      effect: () => Math.max(Math.sqrt(Math.log10(player.eternities)) * 0.45, 1)
    },
    {
      id: 19,
      cost: 1500,
      requirement: "Have a total of 30 glyphs",
      description: "You can sacrifice glyphs for permanent bonuses (Shift + click)"
    },
    {
      id: 20,
      cost: 1500,
      requirement: "2 years total play time",
      description: "You can have 2 black holes"
    },
    {
      id: 21,
      cost: 100000,
      requirement: "2800 total galaxies from all types",
      description: "Remote galaxy scaling is removed"
    },
    {
      id: 22,
      cost: 100000,
      requirement: "1e28000 time shards",
      description: "Growing bonus to TD based on days spent in this Reality",
      effect: () => Decimal.pow10(Math.pow(1 + 2 * Math.log10(Time.thisReality.totalDays + 1), 1.6)),
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 23,
      cost: 100000,
      requirement: "Reality in under 15 minutes",
      description: "Replicanti gain is boosted from your fastest reality",
      effect: () => Math.max(15 / Time.bestReality.totalMinutes, 1),
      cap: 900,
      formatEffect: value => formatX(value, 2, 2)
    },
    {
      id: 24,
      cost: 100000,
      requirement: "Reality for 5000 RM without glyphs",
      description: "Gain another glyph slot"
    },
    {
      id: 25,
      cost: 100000,
      requirement: "1e10500 EP",
      description: "Reality autobuyer"
    },
  ];
})();