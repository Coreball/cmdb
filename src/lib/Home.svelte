<script lang="ts">
  import type { Movie, Movies } from '../types'

  export let movies: Movies
  export let showGrid = true
  export let showGroups = ''

  $: recents = Object.entries(movies)
    .flatMap(([id, movie]) =>
      movie.viewings.map((viewing) => ({ ...viewing, id }))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4)

  $: groups = Object.entries(movies).reduce((g, [id, m]) => {
    const key = m.title.charAt(0)
    const group = g[key] ?? []
    return { ...g, [key]: [...group, { ...m, id }] }
  }, {}) as { [key: string]: (Movie & { id: string })[] }
</script>

<main class:wide={showGrid}>
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
        <select bind:value={showGroups}>
          <option value="">--</option>
          <option value="a-z">A-Z</option>
        </select>
        <div id="controls-display">
          <button class:selected={!showGrid} on:click={() => (showGrid = false)}
            >List</button
          >
          <button class:selected={showGrid} on:click={() => (showGrid = true)}
            >Grid</button
          >
        </div>
      </div>
    </div>
    {#if showGrid}
      {#if showGroups}
        <div class="groups-list">
          {#each Object.entries(groups) as [key, group]}
            <div class="group">
              <h3>{key}</h3>
              <div class="grid">
                {#each group as movie}
                  <a href={movie.id}>
                    <img src={movie.poster} alt="{movie.title} Poster" />
                    <p>{movie.title}</p>
                  </a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="grid mt">
          {#each Object.entries(movies) as [id, movie]}
            <a href={id}>
              <img src={movie.poster} alt="{movie.title} Poster" />
              <p>{movie.title}</p>
            </a>
          {/each}
        </div>
      {/if}
    {:else}
      <ul>
        {#each Object.entries(movies) as [id, movie]}
          <li><a href={id}>{movie.title} ({movie.year})</a></li>
        {/each}
      </ul>
    {/if}
  </section>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 640px;
    margin: 0 auto;
    transition: max-width 0.1s;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
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

  .wide {
    max-width: 640px;
  }

  #controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  #controls select {
    height: 1.75rem;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }

  #controls div {
    display: flex;
    align-items: center;
  }

  #controls div button {
    box-sizing: border-box;
    width: 3rem;
    height: 1.75rem;
  }

  #controls div button:first-of-type {
    border-radius: 0.5rem 0 0 0.5rem;
    padding-left: 0.25rem;
  }

  #controls div button:last-of-type {
    border-radius: 0 0.5rem 0.5rem 0;
    padding-right: 0.25rem;
  }

  #controls div .selected {
    background-color: var(--accent-color);
    color: var(--background-color);
  }

  .groups-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: auto;
    gap: 1rem;
  }

  .grid a,
  .grid img {
    display: block;
    width: 100%;
  }

  .grid p {
    margin: 0.5rem 0 0;
    color: inherit;
  }

  .mt {
    margin-top: 0.25rem;
  }
</style>
