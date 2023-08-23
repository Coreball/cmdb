<script lang="ts">
  import type { Movies } from '../types'

  export let movies: Movies

  $: recents = Object.entries(movies)
    .flatMap(([id, movie]) =>
      movie.viewings.map((viewing) => ({ ...viewing, id }))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4)
</script>

<main>
  <h1>CMDB</h1>
  <section>
    <h2>Recently Watched</h2>
    <ul>
      {#each recents as recent}
        <li>
          <a href={recent.id}
            >{movies[recent.id].title} ({movies[recent.id].year})</a
          >
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h2>All Movies</h2>
    <ul>
      {#each Object.entries(movies) as [id, movie]}
        <li><a href={id}>{movie.title} ({movie.year})</a></li>
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
