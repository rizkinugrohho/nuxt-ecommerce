<template>
    <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-item"><nuxt-link :to="{ name: 'admindashboard' }" class="c-sidebar-nav-link"
                href="index.html">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"></use>
                </svg> Dashboard</nuxt-link></li>
        <li class="c-sidebar-nav-title">MASTER DATA</li>
        <li class="c-sidebar-nav-item"><nuxt-link :to="{ name: 'admincategories' }" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-folder"></use>
                </svg> Categories</nuxt-link>
        </li>
        <li class="c-sidebar-nav-item">
            <nuxt-link :to="{ name: 'admin-products' }" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-layers"></use>
                </svg> Products
            </nuxt-link>
        </li>

        <li class="c-sidebar-nav-title">ORDERS</li>
        <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"></use>
                </svg> Invoices</a>
        </li>
        <li class="c-sidebar-nav-title">OTHERS</li>
        <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                </svg> Customers</a>
        </li>
        <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-laptop"></use>
                </svg> Sliders</a>
        </li>
        <li class="c-sidebar-nav-item"><a href="#" class="c-sidebar-nav-link">
                <svg class="c-sidebar-nav-icon">
                    <use xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"></use>
                </svg> Users</a>
        </li>
        <li class="c-sidebar-nav-divider"></li>
    </ul>
</template>
<script>
export default {
}
</script>
<style scoped>
a.nuxt-link-active {
    background: rgba(255, 255, 255, .05) !important;
}
</style>
