<script>
//import BreakInfinityButton from "./BreakInfinityButton";
//import InfinityUpgradeButton from "@/components/InfinityUpgradeButton";

export default {
  name: "UniversalLawsTab",
  components: {
    //BreakInfinityButton,
    //InfinityUpgradeButton
  },
  data() {
    return {
      isUnlocked: true
    };
  },
  computed: {
    grid() {
      return [
        /*[
          BreakInfinityUpgrade.totalAMMult,
          BreakInfinityUpgrade.currentAMMult,
          BreakInfinityUpgrade.galaxyBoost,
        ],
        [
          BreakInfinityUpgrade.infinitiedMult,
          BreakInfinityUpgrade.achievementMult,
          BreakInfinityUpgrade.slowestChallengeMult,
        ],
        [
          BreakInfinityUpgrade.infinitiedGen,
          BreakInfinityUpgrade.autobuyMaxDimboosts,
          BreakInfinityUpgrade.autobuyerSpeed
        ],
        [
          BreakInfinityUpgrade.tickspeedCostMult,
          BreakInfinityUpgrade.dimCostMult,
          BreakInfinityUpgrade.ipGen
        ]*/
      ];
    }
  },
  methods: {
    update() {
      //this.isUnlocked = Autobuyer.bigCrunch.hasMaxedInterval;
    },
    btnClassObject(column) {
      /*return {
        "l-infinity-upgrade-grid__cell": true,
        "o-infinity-upgrade-btn--multiplier": column === 3
      };*/
    },
    timeDisplayShort(time) {
      return timeDisplayShort(time);
    }
  }
};
</script>

<template>
  <div>
    Purchasing a Law makes its cost go up by 2 and all other Laws by 1. You can create a new universe every END Antimatter.
  </div>
  
  <!-- <div class="l-break-infinity-tab">
    <div v-if="!isUnlocked">
      Reduce the interval of Automatic Big Crunch Autobuyer to
      {{ format(0.1, 1, 1) }} seconds to unlock Break Infinity.
    </div>
    <BreakInfinityButton class="l-break-infinity-tab__break-btn" />
    <div
      v-if="isUnlocked"
      class="l-break-infinity-upgrade-grid l-break-infinity-tab__grid"
    >
      <div
        v-for="(column, columnId) in grid"
        :key="columnId"
        class="l-break-infinity-upgrade-grid__row"
      >
        <InfinityUpgradeButton
          v-for="upgrade in column"
          :key="upgrade.id"
          :upgrade="upgrade"
          :class="btnClassObject(columnId)"
        />
      </div>
    </div>
  </div> -->
</template>

<style scoped>

</style>
