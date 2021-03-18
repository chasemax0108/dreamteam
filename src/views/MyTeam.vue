<template>
  <div class="players">
    <div class="player" v-for="player in players" :key="player.player_number">
      <div class="card_bg">
        <PlayerCard :player="player"/>
        <button class="remove_button" @click="removeFromTeam(player)">Remove Player</button>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from "../components/PlayerCard.vue";

export default {
  components: {
    PlayerCard
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(player => this.$root.$data.team.includes(player));
    }
  },
  methods: {
    removeFromTeam(player) {
      this.$root.$data.removeFromTeam(player);
    }
  }
}
</script>

<style>

.remove_button {
  background-color: rgb(214, 81, 81);
  border: 0;
  padding: 10px 0;
  border-radius: 3px;
  color: #FFF;
}

</style>