import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";
//1.html v-form先暫時註解
//2.取得資料 "客戶購物-產品"
//3.資料呈現在畫面上(產品列表)
//4.按鈕功能(元件建立、建立modal實體、掛載至html)
//5.購物車列表
//6.loading功能





const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'kai';

const app = createApp({
    data() {
        return {
            cartData: {},
            products: [],
            productId: '',
            isLoadingItem: '',


        }
    },
    methods: {
        getProducts() {
            axios.get(`${apiUrl}/api/${apiPath}/products/all`)
                .then(res => {
                    this.products = res.data.products;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        openProductModal(id) {
            //元件要加上ref才能用此方式呼叫
            this.productId = id;
            this.$refs.productModal.openModal();
        },
        getCart() {
            axios.get(`${apiUrl}/api/${apiPath}/cart`)
                .then(res => {
                    this.cartData = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        addToCart(id, qty = 1) {
            const data =
            {
                "product_id": id,
                qty
            };
            this.isLoadingItem = id;
            axios.post(`${apiUrl}/api/${apiPath}/cart`, { data })
                .then(res => {
                    this.getCart();
                    this.isLoadingItem = '';
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getProducts();
        this.getCart();
    }
});

//$refs方式(ref=modal)
app.component('product-modal', {
    //props:外傳內
    props: ['id'],
    template: '#userProductModal',
    data() {
        return {
            modal: {},
            product: {},
        }
    },
    //產品id更動的監控
    watch: {
        id() {
            this.getproduct();
        }
    },
    methods: {
        openModal() {
            this.modal.show();
        },
        getproduct() {
            axios.get(`${apiUrl}/api/${apiPath}/product/${this.id}`)
                .then(res => {
                    console.log(res.data);
                    this.product = res.data.product;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal);
    }
});
app.mount("#app");