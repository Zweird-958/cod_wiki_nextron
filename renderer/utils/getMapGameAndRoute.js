import { GAMES } from "../config/games"

const getMapGameAndRoute = (mapName) => {
  for (const studioGames of Object.values(GAMES)) {
    for (const game of Object.keys(studioGames)) {
      for (const map of Object.keys(studioGames[game].maps)) {
        if (map === mapName) {
          return {
            gameRoute: game,
            mapRoute: map,
            currentMap: studioGames[game].maps[mapName],
          }
        }
      }
    }
  }

  return { gameRoute: null, mapRoute: null, currentMap: null }
}

export default getMapGameAndRoute
