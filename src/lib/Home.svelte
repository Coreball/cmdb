<script lang="ts">
  import type { Movies } from '../types'

  export let movies: Movies

  $: recents = Object.entries(movies)
    .flatMap(([id, movie]) =>
      movie.viewings.map((viewing) => ({ ...viewing, id }))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4)

  let grid = false
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
    <div class="section-header">
      <h2>All Movies</h2>
      <div id="controls">
        <button class:selected={!grid} on:click={() => (grid = false)}
          >List</button
        >
        <button class:selected={grid} on:click={() => (grid = true)}
          >Grid</button
        >
      </div>
    </div>
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

  section {
    margin-bottom: 1rem;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
  }

  #controls {
    display: flex;
    align-items: center;
  }

  #controls button {
    box-sizing: border-box;
    width: 3rem;
    height: 2rem;
  }

  #controls button:first-of-type {
    border-radius: 1rem 0 0 1rem;
    padding-left: 0.5rem;
  }

  #controls button:last-of-type {
    border-radius: 0 1rem 1rem 0;
    padding-right: 0.5rem;
  }

  #controls .selected {
    background-color: var(--accent-color);
    color: var(--background-color);
  }
</style>
