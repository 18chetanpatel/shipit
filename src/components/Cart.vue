<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">SHOPPING CART</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">ITEM</th>
                <th class="text-center">PRICE</th>
                <th class="text-center">QUANTITY</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/img/shop/1.jpg')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 1</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>$40.00</td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number"
                  ></v-text-field>
                </td>
                <td>$80.00</td>
                <td><a>X</a></td>
              </tr>
              <tr>
                <td>
                  <v-list-item
                  key="1"
                  @click=""
                >
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/img/shop/2.jpg')"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >Item 2</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>$40.00</td>
                <td>
                  <v-text-field
                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
                    outlined
                    value="2"
                    type="number"
                  ></v-text-field>
                </td>
                <td>$80.00</td>
                <td><a>X</a></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">Shipping and additional costs are calculated based on values you have entered.
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px;">$160.00</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td class="text-right" style="width: 50px;">$10.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td class="text-right" style="width: 50px;">$5.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td class="text-right" style="width: 50px;"><b>$175.00</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined>PROCEED TO PAY</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            rating: 4.5,
            breadcrums: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_home',
                },
                {
                    text: 'Clothing',
                    disabled: false,
                    href: 'breadcrumbs_clothing',
                },
                {
                    text: 'T-Shirts',
                    disabled: true,
                    href: 'breadcrumbs_shirts',
                },
            ],
        })
    }
</script>

