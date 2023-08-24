<script lang="ts">
  import { Link, Route, Router, links } from 'svelte-routing'
  import Home from './lib/Home.svelte'
  import data from './movies.json'
  import type { Movies } from './types'
  import Detail from './lib/Detail.svelte'

  const movies: Movies = data
  const basepath = '/'

  let grid = false
</script>

<div use:links>
  <Router {basepath}>
    <Route path="/:id" let:params><Detail movie={movies[params.id]} /></Route>
    <Route path="/"><Home {movies} bind:grid /></Route>
  </Router>
</div>
