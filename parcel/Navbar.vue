<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-text>
           <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
          <span class="ml-3 mr-5">Company Name</span>
        </b-nav-text>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/floorplan">Floorplan</b-nav-item>
        <!-- <b-nav-item to="/" exact :active="$route.name == 'home'">Home</b-nav-item> -->
        <!-- <b-nav-item to="/table" exact :active="$route.name == 'table'">Table</b-nav-item> -->
        <!-- <b-nav-item to="/chart" exact :active="$route.name == 'chart'">Chart</b-nav-item> -->

        <!-- Navbar dropdowns -->
        <!-- <b-nav-item-dropdown text="Realtime" right> -->
          <!-- <b-dropdown-item to="/chart_volts" exact :active="$route.name == 'chart_volts'">Volts</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#">Menu Item 2</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#">Menu Item 3</b-dropdown-item>
          <b-dropdown-item href="#">Menu Item 4</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {

}

</script>

