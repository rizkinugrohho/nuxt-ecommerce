<template>
    <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card border-0 rounded shadow-sm border-top-orange">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-layer-group"></i> PRODUCTS</span>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <nuxt-link :to="{ name: 'admin-products-create' }"
                                                class="btn btn-warning btn-sm" style="padding-top: 10px;">
                                                <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link>
                                        </div>
                                        <input type="text" class="form-control" v-model="search"
                                            placeholder="search by product name" @keypress.enter="searchData">
                                        <div class="input-group-append">
                                            <button class="btn btn-warning" @click="searchData"><i
                                                    class="fa fa-search"></i>
                                                SEARCH
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <b-table striped bordered hover :items="products.data" :fields="fields" show-empty>
                                    <template v-slot:cell(actions)="row">
                                        <b-button :to="{
                                                name: 'admin-products-edit-id', params: {
                                                    id:
                                                        row.item.id
                                                }
                                            }" variant="info" size="sm">
                                            EDIT
                                        </b-button>
                                        <b-button variant="danger" size="sm"
                                            @click="destroyProduct(row.item.id)">DELETE</b-button>
                                    </template>

                                    <template v-slot:cell(image)="data">
                                        <img class="img-fluid" width="50" :src="data.item.image" />
                                    </template>
                                </b-table>
                                <!-- pagination -->
                                <b-pagination align="right" :value="products.current_page" :total-rows="products.total"
                                    :per-page="products.per_page" @change="changePage"
                                    aria-controls="my-table"></b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    // layout
    layout: 'admin',
    // hook "asyncData"
    async asyncData({ store }) {
        await store.dispatch('admin/product/getProductsData')
    },
    // data function
    data() {
        return {
            // table header
            fields: [{
                label: 'Image',
                key: 'image',
                tdClass: 'text-center'
            },
            {
                label: 'Product Name',
                key: 'title',
            },
            {
                label: 'Category Name',
                key: 'category.name'
            },
            {
                label: 'Stock',
                key: 'stock',
                tdClass: 'text-center'
            },
            {
                label: 'Actions',
                key: 'actions',
                tdClass: 'text-center'
            }
            ],
            // state search
            search: ''
        }
    },
    // meta
    head() {
        return {
            title: 'Products - Administrator',
        }
    },
    // computed
    computed: {
        // products
        products() {
            return this.$store.state.admin.product.products
        },
    },
    // method
    methods: {
        // method "searchData"
        searchData() {
            // commit to mutation "SET_PAGE"
            this.$store.commit('admin/product/SET_PAGE', 1)
            // dispatch on action "getProductsData"
            this.$store.dispatch('admin/product/getProductsData',
                this.search)
        },
        // method "changePage"
        changePage(page) {
            // commit to mutation "SET_PAGE"
            this.$store.commit('admin/product/SET_PAGE', page)
            // dispatch on action "getProductsData"
            this.$store.dispatch('admin/product/getProductsData',
                this.search)
        },
        // method "destroyProduct"
        destroyProduct(id) {
            this.$swal.fire({
                title: 'ARE YOU SURE ?',
                text: "WANT TO DELETE THIS DATA !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'YES, DELETE!',
                cancelButtonText: 'NO',
            }).then((result) => {
                if (result.isConfirmed) {
                    // dispatch to action "deleteCategory" vuex
                    this.$store.dispatch('admin/product/destroyProduct', id)
                        .then(() => {
                            // feresh data
                            this.$nuxt.refresh()
                            // alert
                            this.$swal.fire({
                                title: 'SUCCESS!',
                                text: "Data Deleted Successfully!",
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            })
                        })
                }
            })
        }
    }
}
</script>
<style>
</style>