<template>
    <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card border-0 rounded shadow-sm border-top-orange">
                            <div class="card-header">
                                <span class="font-weight-bold"><i class="fa fa-laptop"></i> SLIDERS</span>
                            </div>
                            <div class="card-body">
                                <nuxt-link :to="{ name: 'admin-sliders-create' }"
                                    class="btn btn-warning btn-sm mb-3 p-2">
                                    <i class="fa fa-plus-circle"></i> ADD NEW</nuxt-link>

                                <b-table striped bordered hover :items="sliders.data" :fields="fields" show-empty>
                                    <template v-slot:cell(image)="data">
                                        <img class="img-fluid" width="200" :src="data.item.image" />
                                    </template>
                                </b-table>
                                <!-- pagination -->
                                <b-pagination align="right" :value="sliders.current_page" :total-rows="sliders.total"
                                    :per-page="sliders.per_page" @change="changePage"
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
        await store.dispatch('admin/slider/getSlidersData')
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
                label: 'Link Slider',
                key: 'link'
            },
            {
                label: 'Actions',
                key: 'actions',
                tdClass: 'text-center'
            }
            ],
        }
    },
    // meta
    head() {
        return {
            title: 'Sliders - Administrator',
        }
    },
    // computed
    computed: {
        // sliders
        sliders() {
            return this.$store.state.admin.slider.sliders
        },
    },
    // method
    methods: {
        // method "changePage"
        changePage(page) {
            // commit to mutation "SET_PAGE"
            this.$store.commit('admin/slider/SET_PAGE', page)
            // dispatch on action "getSlidersData"
            this.$store.dispatch('admin/slider/getSlidersData',
                this.search)
        },
    }
}

</script>
<style></style>