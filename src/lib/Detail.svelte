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
  <h2>Rating: {movie.rating}</h2>
  {#if movie.comment}
    <p>{movie.comment}</p>
  {/if}
  <a href="/">Back</a>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 640px;
    margin: 0 auto;
  }

  img {
    aspect-ratio: 2 / 3;
    display: block;
    max-width: 400px;
    width: 75%;
    margin: 1.5rem auto;
  }

  h2 {
    margin-top: 1.5rem;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
  }
</style>
