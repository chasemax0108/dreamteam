<template>
    <div class="card">
        <div class="player_intro">
            <img :src="getImgUrl(player.player_number)">
            <div class="player_name">
                <h1>#{{player.player_number}}</h1>
                <h1 class="player_last_name">{{player.last_name}}</h1>
            </div>
        </div>
        <div class="player_stats">
            <div class="stat">
                <p>Name</p>
                <p>{{player.first_name}} {{player.last_name}}</p>
            </div>
            <div class="stat">
                <p>Teamwork</p>
                <p>{{player.teamwork}}</p>
            </div>
            <div class="stat">
                <p>Passing</p>
                <p>{{player.passing}}</p>
            </div>
            <div class="stat">
                <p>Defense</p>
                <p>{{player.defense}}</p>
            </div>
            <div class="stat">
                <p>Shooting</p>
                <p>{{player.shooting}}</p>
            </div>
            <div class="stat">
                <p>Footwork</p>
                <p>{{player.footwork}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerCard',
    props: {
        player: Object
    },
    methods: {
        getImgUrl(player_number) {
            var ref = player_number.toString();
            if (player_number < 10) {
                ref = "0" + ref;
            }
            return require('../assets/player_images/' + ref + '.jpg');
        }
    }
}
</script>

<style scoped>

.player_intro {
    display: flex;
}

.player_name {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: left;
    margin-left: -7px;
}

.player_last_name {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-top: 10px;
    
}

.player_intro img {
    width: 125px;
    height: 100%;
    margin: 10px;
}

.player_stats {
    padding: 10px;
}

.stat {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.stat p {
    width: 50%;
}
</style>