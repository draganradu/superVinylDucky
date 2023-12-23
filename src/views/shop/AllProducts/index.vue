<script setup lang="ts">
import ShopLayout from '@/layouts/shop/main.vue'
import { useI18n } from "vue-i18n"
import { useStore } from 'vuex'

// hooks ---------------------------------------
const { locale } = useI18n()
const store = useStore()

// data ---------------------------------------
const getProducts = store.getters['shop/getProductsGrid']
const getCategory = store.getters['shop/getAllCategory']
const keys = Object.keys(getProducts)

</script>

<template>
  <main>
    <ShopLayout :sidebar="true">
      <div class="row">
        <div class="col p-3 bg-white">
          <h1 class="mb-5 d-flex justify-content-between">
            <span>All Products</span>
            <span class="badge text-bg-success me-1 a-clean">
              <RouterLink to="/en/add-new/">+</RouterLink>
            </span>
          </h1>
          <table class="table table-striped a-clean">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(k, i) in keys" :key="k">
                <th scope="row">
                  <RouterLink :to="`/${locale}/stickers/${k}/`">{{ i }}</RouterLink>
                </th>
                <td v-if="!getProducts[k].upcoming">
                  <RouterLink :to="`/${locale}/stickers/${k}/`">{{ getProducts[k][locale]?.name || k }}
                  </RouterLink>
                </td>
                <td v-else>Coming soon</td>
                <td class="small">{{ getProducts[k][locale]?.description }}</td>
                <td class="small">
                  <a type="button" v-if="getProducts[k]?.buyLink" class="btn btn-outline-dark me-2"
                    :href="getProducts[k]?.buyLink">Buy</a>
                </td>
              </tr>

            </tbody>
          </table>
          <div>
            <span v-for="i in getCategory" :key="i" class="badge text-bg-primary me-1 a-clean"><RouterLink :to="`/en/stickers-category/${i}`">{{ i }}</RouterLink></span>
          </div>
        </div>
      </div>
    </ShopLayout>
  </main>
</template>

<style scoped lang="scss">
.small {
  font-size: 10px;
  line-height: 1;
}
</style>

