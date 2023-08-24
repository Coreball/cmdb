<script lang="ts">
  import type { Movie } from '../types'

  export let movie: Movie
</script>

<main>
  <h1>{movie.title} ({movie.year})</h1>
  <img src={movie.poster} alt="{movie.title} Poster" />
  <h2>Watched</h2>
  <ul>
    {#each movie.viewings as viewing}
      <li>{viewing.date}, {viewing.location}</li>
    {/each}
  </ul>
  <a href="/">Back</a>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 640px;
    margin: 0 auto;
  }

  img {
    display: block;
    max-width: 400px;
    width: 75%;
    margin: 1rem auto;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
  }
</style>
