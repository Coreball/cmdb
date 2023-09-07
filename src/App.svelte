<script lang="ts">
  import { Route, Router } from 'svelte-routing'
  import Home from './lib/Home.svelte'
  import data from './movies.json'
  import type { GroupOptions, Movies } from './types'
  import Detail from './lib/Detail.svelte'

  const movies: Movies = data
  const basepath = '/cmdb/'

  let showGrid = false
  let showGroups: GroupOptions = ''
</script>

<div>
  <Router {basepath}>
    <Route path="/:id" let:params><Detail movie={movies[params.id]} /></Route>
    <Route path="/"><Home {movies} bind:showGrid bind:showGroups /></Route>
  </Router>
</div>
