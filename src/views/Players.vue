<template>
  <div class="players">
    <div class="player" v-for="player in players" :key="player.player_number">
      <div class="card_bg">
        <PlayerCard :player="player"/>
        <button class="add_button" @click="addToTeam(player)">Add Player</button>
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
      return this.$root.$data.players.filter(player => !this.$root.$data.team.includes(player));
    }
  },
  methods: {
    addToTeam(player) {
      this.$root.$data.addToTeam(player);
    }
  }
}
</script>

<style>
.card_bg{
  background-color: #FFF;
  width: 175px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.players {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.add_button {
  background-color: #0C6;
  border: 0;
  padding: 10px 0;
  border-radius: 3px;
  color: #FFF;
}

</style>
