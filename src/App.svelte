<script lang="ts">
  import { Link, Route, Router, links } from 'svelte-routing'
  import Home from './lib/Home.svelte'
  import data from './movies.json'
  import type { Movies } from './types'
  import Detail from './lib/Detail.svelte'

  const movies: Movies = data
  const basepath = '/'
</script>

<div use:links>
  <Router {basepath}>
    <Route path="/:id" let:params><Detail movie={movies[params.id]} /></Route>
    <Route path="/"><Home {movies} /></Route>
  </Router>
</div>
