<template>
    <v-container grid-list-lg fluid text-xs-center>
        <v-layout align-center justify-center row wrap>
            <v-flex sm6 xs12>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Features</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip top>
                            <v-btn
                                icon
                                large
                                slot="activator"
                            >
                                <v-icon large>info</v-icon>
                            </v-btn>
                            <span>A part</span>
                        </v-tooltip>
                    </v-toolbar>
                    <!-- <v-card-text>
                        <v-text-field prepend-icon="help" type="text" label="金丹"></v-text-field>
                    </v-card-text> -->
                    <v-btn color="success" @click="shopDataSetSave">Save</v-btn>
                    <v-btn color="success" @click="shopDataSetDelete">Reset</v-btn>
                    <v-divider></v-divider>
                </v-card>
            </v-flex>
            <v-flex sm6 xs12>
                <v-card>
                    <v-card-text class="px-0">功徳の玉</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex
                xs12 sm6 lg3
                v-for="(shelf, sId) in shopDataSet"
                :key="'shop' + sId"
            >
                <v-card>
                    <v-card-title>{{ shelf.title }}で交換可能なアイテム</v-card-title>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-tile
                            v-for="(product) in shelf.shop"
                            :key="'shop' + sId + '_' + product.title"
                        >
                            <v-layout row>
                                <v-flex xs6>
                                    <v-subheader>{{ product.title }}</v-subheader>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field
                                        :label="'價格:' + product.price"
                                        placeholder=剩餘數量
                                        v-model="product.remaining"
                                    ></v-text-field>
                                    <v-list-tile-content></v-list-tile-content>
                                </v-flex>

                            </v-layout>
                        </v-list-tile>
                    </v-list>
                    <v-card-text>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-content>所需{{ shelf.title }}數量: {{ shopDataSetAccumulator(sId) }}</v-list-tile-content>
                                <v-list-tile-content>最佳效率預期掉落 {{ expetedPerDropsSubtotal(shelf.title) }}/場</v-list-tile-content>
                                <v-list-tile-content>需要 {{ Math.ceil(shopDataSetAccumulator(sId) / expetedPerDropsSubtotal(shelf.title)) }} 場</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile v-if="shelf.price !== 'undefined'">
                                <v-list-tile-content>需要 {{ expectedDropsPriceTotal(sId, shelf.title) }} 功德玉</v-list-tile-content>
                                <v-list-tile-content
                                    v-if="expectedPerDropsFilter(shelf.unit) !== 'undefined'"
                                >需要 {{ Math.ceil(expectedDropsPriceTotal(sId, shelf.title) / 52 * 40) }} AP</v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import store from "store";

const STORE_KEY = "GoWestCalculator";

export default {
  data: () => ({
    shopDataSet: [],
    expectedPerDrops: [
      { title: "金丹", value: 0, plus: 0 },
      { title: "仙桃", value: 0, plus: 0 },
      { title: "肉まん", value: 0, plus: 0 },
      { title: "大蓮華", value: 207, plus: 243, price: 140, unit: "功徳の玉" },
      { title: "功德の札", value: 18, plus: 63 },
      { title: "功徳の玉", value: 26, plus: 26, price: 40, unit: "AP" }
    ]
  }),
  methods: {
    shopDataSetAccumulator(sId) {
      let tmp = 0;
      this.shopDataSet[sId].shop.forEach(product => {
        if (product.remaining < 0) return;
        tmp += product.price * product.remaining;
      });
      return tmp;
    },
    shopDataSetSave() {
      store.set(STORE_KEY, this.shopDataSet);
    },
    shopDataSetDelete() {
      store.remove(STORE_KEY);
      this.shopDataSet = this.shopDataSetInit();
    },
    shopDataSetInit() {
      return [
        {
          title: "金丹",
          shop: [
            { title: "英雄風采 三英傑", price: 200, remaining: 2 },
            { title: "竜の逆鱗", price: 40, remaining: 10 },
            { title: "蛮神の心臓", price: 40, remaining: 10 },
            { title: "隕蹄鉄", price: 20, remaining: 20 },
            { title: "弓の秘石", price: 20, remaining: 20 },
            { title: "槍の秘石", price: 20, remaining: 20 },
            { title: "術の秘石", price: 20, remaining: 20 },
            { title: "狂の秘石", price: 20, remaining: 20 },
            { title: "星4フォウ君(ATK)", price: 200, remaining: 1 },
            { title: "星4フォウ君(HP)", price: 200, remaining: 1 },
            { title: "マナプリズム", price: 2, remaining: 500 },
            { title: "QP(1万)", price: 1, remaining: -1 }
          ]
        },
        {
          title: "仙桃",
          shop: [
            { title: "英雄風采 三英傑", price: 200, remaining: 1 },
            { title: "原初の産毛", price: 40, remaining: 10 },
            { title: "黒獣脂", price: 40, remaining: 10 },
            { title: "無間の歯車", price: 20, remaining: 20 },
            { title: "禁断の頁", price: 20, remaining: 20 },
            { title: "弓の魔石", price: 20, remaining: 20 },
            { title: "槍の魔石", price: 20, remaining: 20 },
            { title: "術の魔石", price: 20, remaining: 20 },
            { title: "狂の魔石", price: 20, remaining: 20 },
            { title: "星4フォウ君(ATK)", price: 200, remaining: 1 },
            { title: "金丹", price: 10, remaining: -1 }
          ]
        },
        {
          title: "肉まん",
          shop: [
            { title: "英雄風采 三英傑", price: 200, remaining: 1 },
            { title: "封魔のランプ", price: 30, remaining: 20 },
            { title: "凶骨", price: 15, remaining: 20 },
            { title: "英雄の証", price: 15, remaining: 20 },
            { title: "弓の輝石", price: 20, remaining: 20 },
            { title: "槍の輝石", price: 20, remaining: 20 },
            { title: "術の輝石", price: 20, remaining: 20 },
            { title: "狂の輝石", price: 20, remaining: 20 },
            { title: "星4フォウ君(HP)", price: 200, remaining: 1 },
            { title: "星3フォウ君(HP)", price: 20, remaining: 20 },
            { title: "星3フォウ君(ATK)", price: 20, remaining: 20 },
            { title: "金種火", price: 4, remaining: 100 },
            { title: "銀種火", price: 2, remaining: 100 },
            { title: "仙桃", price: 10, remaining: -1 }
          ]
        },
        {
          title: "大蓮華",
          shop: [
            { title: "風雲仙姫", price: 400, remaining: 4 },
            { title: "伝承結晶", price: 1000, remaining: 1 },
            { title: "精霊根", price: 100, remaining: 10 },
            { title: "戦馬の幼角", price: 75, remaining: 20 },
            { title: "鳳凰の羽根", price: 65, remaining: 20 },
            { title: "八連双晶", price: 50, remaining: 20 },
            { title: "励振火薬", price: 30, remaining: 30 },
            { title: "星4フォウ君(ATK)", price: 400, remaining: 2 },
            { title: "星4フォウ君(HP)", price: 400, remaining: 2 },
            { title: "マナプリズム", price: 3, remaining: 500 },
            { title: "QP(1万)", price: 1, remaining: -1 }
          ]
        }
      ];
    },
    expectedPerDropsFilter(eTitle) {
      let focusItem = this.expectedPerDrops.filter(
        item => item.title == eTitle
      );
      return focusItem[0];
    },
    expetedPerDropsSubtotal(eTitle) {
      return (
        this.expectedPerDropsFilter(eTitle).value +
        this.expectedPerDropsFilter(eTitle).plus
      );
    },
    expectedDropsPriceTotal(sId, eTitle) {
      return (
        Math.ceil(
          this.shopDataSetAccumulator(sId) /
            this.expetedPerDropsSubtotal(eTitle)
        ) * this.expectedPerDropsFilter(eTitle).price
      );
    }
  },
  created() {
    this.shopDataSet = store.get(STORE_KEY) || this.shopDataSetInit();
  }
};
</script>