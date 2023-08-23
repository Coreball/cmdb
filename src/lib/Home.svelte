<script lang="ts">
  import type { Movies } from '../types'

  export let movies: Movies
</script>

<main>
  <h1>CMDB</h1>
  <section>
    <h2>Recently Watched</h2>
    <ul>
      <li>TODO</li>
    </ul>
  </section>
  <section>
    <h2>All Movies</h2>
    <ul>
      {#each Object.entries(movies) as [key, movie]}
        <li><a href={key}>{movie.title} ({movie.year})</a></li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 640px;
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
