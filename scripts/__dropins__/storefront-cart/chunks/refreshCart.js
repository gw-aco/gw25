/*! Copyright 2025 Adobe
All Rights Reserved. */
import{s as o,d as X,f as I,h as G}from"./resetCart.js";import{events as g}from"@dropins/tools/event-bus.js";import{Initializer as j,merge as Y}from"@dropins/tools/lib.js";import{c as K}from"./persisted-data.js";import{CART_FRAGMENT as A}from"../fragments.js";const F=new j({init:async e=>{const n={disableGuestCart:!1,...e};F.config.setConfig(n),D().catch(console.error)},listeners:()=>[g.on("authenticated",e=>{o.authenticated&&!e?g.emit("cart/reset",void 0):e&&!o.authenticated&&(o.authenticated=e,D().catch(console.error))},{eager:!0}),g.on("locale",async e=>{e!==o.locale&&(o.locale=e,D().catch(console.error))}),g.on("cart/reset",()=>{X().catch(console.error),g.emit("cart/data",null)}),g.on("cart/data",e=>{K(e)}),g.on("checkout/updated",e=>{!e||(e==null?void 0:e.type)==="quote"||z().catch(console.error)}),g.on("requisitionList/alert",()=>{z().catch(console.error)})]}),B=F.config;function P(e){var c,r,u,l,i,_,a,f,y,d,m,C,b,x,t,T;if(!e)return null;const n={appliedGiftCards:((c=e==null?void 0:e.applied_gift_cards)==null?void 0:c.map(s=>{var w,R,M;const p={code:s.code??"",appliedBalance:{value:s.applied_balance.value??0,currency:s.applied_balance.currency??"USD"},currentBalance:{value:s.current_balance.value??0,currency:s.current_balance.currency??"USD"},expirationDate:s.expiration_date??""},v=(w=p==null?void 0:p.currentBalance)==null?void 0:w.value,h=(R=p==null?void 0:p.appliedBalance)==null?void 0:R.value,S=(M=p==null?void 0:p.currentBalance)==null?void 0:M.currency,L=v-h>0?v-h:0;return{...p,giftCardBalance:{value:L,currency:S}}}))??[],id:e.id,totalQuantity:te(e),totalUniqueItems:e.itemsV2.items.length,totalGiftOptions:H((r=e==null?void 0:e.prices)==null?void 0:r.gift_options),giftReceiptIncluded:(e==null?void 0:e.gift_receipt_included)??!1,printedCardIncluded:(e==null?void 0:e.printed_card_included)??!1,cartGiftWrapping:((u=e==null?void 0:e.available_gift_wrappings)==null?void 0:u.map(s=>{var p,v,h,S,E;return{design:s.design??"",uid:s.uid,selected:((p=e==null?void 0:e.gift_wrapping)==null?void 0:p.uid)===s.uid,image:{url:((v=s==null?void 0:s.image)==null?void 0:v.url)??"",label:((h=s.image)==null?void 0:h.label)??""},price:{currency:((S=s==null?void 0:s.price)==null?void 0:S.currency)??"USD",value:((E=s==null?void 0:s.price)==null?void 0:E.value)??0}}}))??[],giftMessage:{senderName:((l=e==null?void 0:e.gift_message)==null?void 0:l.from)??"",recipientName:((i=e==null?void 0:e.gift_message)==null?void 0:i.to)??"",message:((_=e==null?void 0:e.gift_message)==null?void 0:_.message)??""},errors:ce(e==null?void 0:e.itemsV2),items:k(e==null?void 0:e.itemsV2),miniCartMaxItems:k(e==null?void 0:e.itemsV2).slice(0,((a=o.config)==null?void 0:a.miniCartMaxItemsDisplay)??10),total:{includingTax:{value:e.prices.grand_total.value,currency:e.prices.grand_total.currency},excludingTax:{value:e.prices.grand_total_excluding_tax.value,currency:e.prices.grand_total_excluding_tax.currency}},discount:N(e.prices.discounts,e.prices.grand_total.currency),subtotal:{excludingTax:{value:(f=e.prices.subtotal_excluding_tax)==null?void 0:f.value,currency:(y=e.prices.subtotal_excluding_tax)==null?void 0:y.currency},includingTax:{value:(d=e.prices.subtotal_including_tax)==null?void 0:d.value,currency:(m=e.prices.subtotal_including_tax)==null?void 0:m.currency},includingDiscountOnly:{value:(C=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:C.value,currency:(b=e.prices.subtotal_with_discount_excluding_tax)==null?void 0:b.currency}},appliedTaxes:q(e.prices.applied_taxes),totalTax:N(e.prices.applied_taxes,e.prices.grand_total.currency),appliedDiscounts:q(e.prices.discounts),isVirtual:e.is_virtual,addresses:{shipping:e.shipping_addresses&&oe(e)},isGuestCart:!o.authenticated,hasOutOfStockItems:!1,hasFullyOutOfStockItems:!1,appliedCoupons:e.applied_coupons};return Y(n,(T=(t=(x=B.getConfig().models)==null?void 0:x.CartModel)==null?void 0:t.transformer)==null?void 0:T.call(t,e))}function H(e){var n,c,r,u,l,i,_,a,f,y,d,m;return{giftWrappingForItems:{value:((n=e==null?void 0:e.gift_wrapping_for_items)==null?void 0:n.value)??0,currency:((c=e==null?void 0:e.gift_wrapping_for_items)==null?void 0:c.currency)??"USD"},giftWrappingForItemsInclTax:{value:((r=e==null?void 0:e.gift_wrapping_for_items_incl_tax)==null?void 0:r.value)??0,currency:((u=e==null?void 0:e.gift_wrapping_for_items_incl_tax)==null?void 0:u.currency)??"USD"},giftWrappingForOrder:{value:((l=e==null?void 0:e.gift_wrapping_for_order)==null?void 0:l.value)??0,currency:((i=e==null?void 0:e.gift_wrapping_for_order)==null?void 0:i.currency)??"USD"},giftWrappingForOrderInclTax:{value:((_=e==null?void 0:e.gift_wrapping_for_order_incl_tax)==null?void 0:_.value)??0,currency:((a=e==null?void 0:e.gift_wrapping_for_order_incl_tax)==null?void 0:a.currency)??"USD"},printedCard:{value:((f=e==null?void 0:e.printed_card)==null?void 0:f.value)??0,currency:((y=e==null?void 0:e.printed_card)==null?void 0:y.currency)??"USD"},printedCardInclTax:{value:((d=e==null?void 0:e.printed_card_incl_tax)==null?void 0:d.value)??0,currency:((m=e==null?void 0:e.printed_card_incl_tax)==null?void 0:m.currency)??"USD"}}}function N(e,n){return e!=null&&e.length?e.reduce((c,r)=>({value:c.value+r.amount.value,currency:r.amount.currency}),{value:0,currency:n}):{value:0,currency:n}}function J(e,n){var c,r,u,l;return{src:e!=null&&e.useConfigurableParentThumbnail?n.product.thumbnail.url:((r=(c=n.configured_variant)==null?void 0:c.thumbnail)==null?void 0:r.url)||n.product.thumbnail.url,alt:e!=null&&e.useConfigurableParentThumbnail?n.product.thumbnail.label:((l=(u=n.configured_variant)==null?void 0:u.thumbnail)==null?void 0:l.label)||n.product.thumbnail.label}}function Z(e){var n,c,r,u;return e.__typename==="ConfigurableCartItem"?{value:(c=(n=e.configured_variant)==null?void 0:n.price_range)==null?void 0:c.maximum_price.regular_price.value,currency:(u=(r=e.configured_variant)==null?void 0:r.price_range)==null?void 0:u.maximum_price.regular_price.currency}:e.__typename==="GiftCardCartItem"?{value:e.prices.price.value,currency:e.prices.price.currency}:{value:e.prices.original_item_price.value,currency:e.prices.original_item_price.currency}}function V(e,n){return e!=null&&e.length&&[...e].sort((r,u)=>u.quantity-r.quantity).find(r=>n>=r.quantity)||null}function O(e){var i,_;const n=e.quantity,c=e.__typename==="ConfigurableCartItem",r=c?(i=e.configured_variant)==null?void 0:i.price_tiers:e.product.price_tiers,u=c?(_=e.configured_variant)==null?void 0:_.price_range:e.product.price_range,l=V(r,n);return l?l.discount.amount_off>0:(u==null?void 0:u.maximum_price.discount.amount_off)>0}function ee(e){var n,c,r;return{senderName:((n=e==null?void 0:e.gift_message)==null?void 0:n.from)??"",recipientName:((c=e==null?void 0:e.gift_message)==null?void 0:c.to)??"",message:((r=e==null?void 0:e.gift_message)==null?void 0:r.message)??""}}function re(e){return{currency:(e==null?void 0:e.currency)??"USD",value:(e==null?void 0:e.value)??0}}function k(e){var c;if(!((c=e==null?void 0:e.items)!=null&&c.length))return[];const n=o.config;return e.items.map(r=>{var u,l,i,_,a,f,y,d,m,C,b,x;return r!=null&&r.product&&(r.product.is_available=!0),{giftWrappingAvailable:((u=r==null?void 0:r.product)==null?void 0:u.gift_wrapping_available)??!1,giftWrappingPrice:re((l=r==null?void 0:r.product)==null?void 0:l.gift_wrapping_price),giftMessage:ee(r),productGiftWrapping:((i=r==null?void 0:r.available_gift_wrapping)==null?void 0:i.map(t=>{var T,s,p,v,h;return{design:t.design??"",uid:t.uid,selected:((T=r.gift_wrapping)==null?void 0:T.uid)===t.uid,image:{url:((s=t==null?void 0:t.image)==null?void 0:s.url)??"",label:((p=t.image)==null?void 0:p.label)??""},price:{currency:((v=t==null?void 0:t.price)==null?void 0:v.currency)??"USD",value:((h=t==null?void 0:t.price)==null?void 0:h.value)??0}}}))??[],itemType:r.__typename,uid:r.uid,giftMessageAvailable:ne(r.product.gift_message_available),url:{urlKey:r.product.url_key,categories:r.product.categories.map(t=>t.url_key)},canonicalUrl:r.product.canonical_url,categories:r.product.categories.map(t=>t.name),priceTiers:r.__typename==="ConfigurableCartItem"?((a=(_=r.configured_variant)==null?void 0:_.price_tiers)==null?void 0:a.map(t=>t))||[]:((f=r.product.price_tiers)==null?void 0:f.map(t=>t))||[],quantity:r.quantity,sku:pe(r),topLevelSku:r.product.sku,name:r.product.name,image:J(n,r),price:{value:r.prices.price.value,currency:r.prices.price.currency},taxedPrice:{value:r.prices.price_including_tax.value,currency:r.prices.price_including_tax.currency},fixedProductTaxes:r.prices.fixed_product_taxes,rowTotal:{value:r.prices.row_total.value,currency:r.prices.row_total.currency},rowTotalIncludingTax:{value:r.prices.row_total_including_tax.value,currency:r.prices.row_total_including_tax.currency},links:se(r.links),total:{value:(y=r.prices.original_row_total)==null?void 0:y.value,currency:(d=r.prices.original_row_total)==null?void 0:d.currency},discount:{value:r.prices.total_item_discount.value,currency:r.prices.total_item_discount.currency,label:(m=r.prices.discounts)==null?void 0:m.map(t=>t.label)},regularPrice:Z(r),discounted:O(r),bundleOptions:r.__typename==="BundleCartItem"?ue(r.bundle_options):null,bundleOptionsUIDs:r.__typename==="BundleCartItem"?le(r.bundle_options):null,selectedOptions:(C=$(r.configurable_options))==null?void 0:C.options,selectedOptionsUIDs:(b=$(r.configurable_options))==null?void 0:b.uids,customizableOptions:ie(r.customizable_options),sender:r.__typename==="GiftCardCartItem"?r.sender_name:null,senderEmail:r.__typename==="GiftCardCartItem"?r.sender_email:null,recipient:r.__typename==="GiftCardCartItem"?r.recipient_name:null,recipientEmail:r.__typename==="GiftCardCartItem"?r.recipient_email:null,message:r.__typename==="GiftCardCartItem"?r.message:null,discountedTotal:{value:r.prices.row_total.value,currency:r.prices.row_total.currency},onlyXLeftInStock:r.__typename==="ConfigurableCartItem"?(x=r.configured_variant)==null?void 0:x.only_x_left_in_stock:r.product.only_x_left_in_stock,lowInventory:r.is_available&&r.product.only_x_left_in_stock!==null,insufficientQuantity:(r.__typename==="ConfigurableCartItem"?r.configured_variant:r.product).stock_status==="IN_STOCK"&&!r.is_available,outOfStock:!1,stockLevel:_e(r),discountPercentage:ae(r),savingsAmount:ge(r),productAttributes:fe(r)}})}function ne(e){switch(+e){case 0:return!1;case 1:return!0;case 2:return null;default:return!1}}function ce(e){var c;const n=(c=e==null?void 0:e.items)==null?void 0:c.reduce((r,u)=>{var l;return(l=u.errors)==null||l.forEach(i=>{r.push({uid:u.uid,text:i.message})}),r},[]);return n!=null&&n.length?n:null}function q(e){return e!=null&&e.length?e.map(n=>({amount:{value:n.amount.value,currency:n.amount.currency},label:n.label,coupon:n.coupon})):[]}function ue(e){const n=e==null?void 0:e.map(r=>({uid:r.uid,label:r.label,value:r.values.map(u=>u.label).join(", ")})),c={};return n==null||n.forEach(r=>{c[r.label]=r.value}),Object.keys(c).length>0?c:null}function le(e){if(!(e!=null&&e.length))return null;const n=[];return e.forEach(c=>{var r;if((r=c.values)!=null&&r.length){const u=c.values.map(l=>l.uid);n.push(...u)}}),n.length>0?n:null}function $(e){const n=e==null?void 0:e.map(u=>({uid:u.configurable_product_option_uid,label:u.option_label,value:u.value_label,valueUid:u.configurable_product_option_value_uid})),c={},r={};return n==null||n.forEach(u=>{c[u.label]=u.value,r[u.label]=u.valueUid}),{options:Object.keys(c).length>0?c:null,uids:Object.keys(r).length>0?r:null}}function ie(e){const n=e==null?void 0:e.map(r=>({uid:r.customizable_option_uid,label:r.label,type:r.type,values:r.values.map(u=>({uid:u.customizable_option_value_uid,label:u.label,value:u.value}))})),c={};return n==null||n.forEach(r=>{var u;switch(r.type){case"field":case"area":case"date_time":c[r.label]=r.values[0].value;break;case"radio":case"drop_down":c[r.label]=r.values[0].label;break;case"multiple":case"checkbox":c[r.label]=r.values.reduce((l,i)=>l?`${l}, ${i.label}`:i.label,"");break;case"file":{const l=new DOMParser,i=r.values[0].value,a=((u=l.parseFromString(i,"text/html").querySelector("a"))==null?void 0:u.textContent)||"";c[r.label]=a;break}}}),c}function te(e){var n,c;return((n=o.config)==null?void 0:n.cartSummaryDisplayTotal)===0?e.itemsV2.items.length:((c=o.config)==null?void 0:c.cartSummaryDisplayTotal)===1?e.total_quantity:e.itemsV2.items.length}function se(e){return(e==null?void 0:e.length)>0?{count:e.length,result:e.map(n=>n.title).join(", ")}:null}function oe(e){var n,c,r,u;return(n=e.shipping_addresses)!=null&&n.length?(c=e.shipping_addresses)==null?void 0:c.map(l=>({countryCode:l.country.code,zipCode:l.postcode,regionCode:l.region.code})):(r=e.addresses)!=null&&r.length?(u=e.addresses)==null?void 0:u.filter(l=>l.default_shipping).map(l=>{var i;return l.default_shipping&&{countryCode:l.country_code,zipCode:l.postcode,regionCode:(i=l.region)==null?void 0:i.region_code}}):null}function _e(e){return e.not_available_message?e.product.quantity!=null?e.product.quantity:"noNumber":null}function ae(e){var u,l,i,_,a,f,y,d;const n=e.quantity,c=V(e.product.price_tiers,n);if(c)return Math.round(c.discount.percent_off);let r;if(e.__typename==="ConfigurableCartItem")r=(_=(i=(l=(u=e==null?void 0:e.configured_variant)==null?void 0:u.price_range)==null?void 0:l.maximum_price)==null?void 0:i.discount)==null?void 0:_.percent_off;else{if(e.__typename==="BundleCartItem")return;r=(d=(y=(f=(a=e==null?void 0:e.product)==null?void 0:a.price_range)==null?void 0:f.maximum_price)==null?void 0:y.discount)==null?void 0:d.percent_off}if(r!==0)return Math.round(r)}function pe(e){var n;return e.__typename==="ConfigurableCartItem"?e.configured_variant.sku:((n=e.product)==null?void 0:n.variantSku)||e.product.sku}function ge(e){var r,u,l,i,_,a;let n,c;if(n=((u=(r=e==null?void 0:e.prices)==null?void 0:r.original_row_total)==null?void 0:u.value)-((i=(l=e==null?void 0:e.prices)==null?void 0:l.row_total)==null?void 0:i.value),c=(a=(_=e==null?void 0:e.prices)==null?void 0:_.row_total)==null?void 0:a.currency,n!==0)return{value:n,currency:c}}function fe(e){var n,c,r;return(r=(c=(n=e==null?void 0:e.product)==null?void 0:n.custom_attributesV2)==null?void 0:c.items)==null?void 0:r.map(u=>{const l=u.code.split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ");return{...u,code:l}})}function ye(e){var r,u;if(!e)return null;const n=l=>{switch(l){case 1:return"EXCLUDING_TAX";case 2:return"INCLUDING_TAX";case 3:return"INCLUDING_EXCLUDING_TAX";default:return"EXCLUDING_TAX"}},c=l=>{switch(+l){case 0:return!1;case 1:return!0;case 2:return null;default:return!1}};return{displayMiniCart:e.minicart_display,miniCartMaxItemsDisplay:e.minicart_max_items,cartExpiresInDays:e.cart_expires_in_days,cartSummaryDisplayTotal:e.cart_summary_display_quantity,cartSummaryMaxItems:e.max_items_in_order_summary,defaultCountry:e.default_country,categoryFixedProductTaxDisplaySetting:e.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:e.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:e.sales_fixed_product_tax_display_setting,shoppingCartDisplaySetting:{zeroTax:e.shopping_cart_display_zero_tax,subtotal:n(e.shopping_cart_display_subtotal),price:n(e.shopping_cart_display_price),shipping:n(e.shopping_cart_display_shipping),fullSummary:e.shopping_cart_display_full_summary,grandTotal:e.shopping_cart_display_grand_total,taxGiftWrapping:e.shopping_cart_display_tax_gift_wrapping},useConfigurableParentThumbnail:e.configurable_thumbnail_source==="parent",allowGiftWrappingOnOrder:c(e==null?void 0:e.allow_gift_wrapping_on_order),allowGiftWrappingOnOrderItems:c(e==null?void 0:e.allow_gift_wrapping_on_order_items),allowGiftMessageOnOrder:c(e==null?void 0:e.allow_order),allowGiftMessageOnOrderItems:c(e==null?void 0:e.allow_items),allowGiftReceipt:!!+(e==null?void 0:e.allow_gift_receipt),allowPrintedCard:!!+(e==null?void 0:e.allow_printed_card),printedCardPrice:{currency:((r=e==null?void 0:e.printed_card_priceV2)==null?void 0:r.currency)??"",value:((u=e==null?void 0:e.printed_card_priceV2)==null?void 0:u.value)!=null?+e.printed_card_priceV2.value:0},cartGiftWrapping:n(+e.cart_gift_wrapping),cartPrintedCard:n(+e.cart_printed_card)}}const de=`
  fragment CUSTOMER_FRAGMENT on Customer {
    addresses {
      default_shipping
      country_code
      postcode
      region {
        region
        region_code
        region_id
      }
    }
  }
`,me=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      $pageSize: Int! = 100,
      $currentPage: Int! = 1,
      $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
    ) {

    cart(cart_id: $cartId){
      ...CART_FRAGMENT
    }
  }

  ${A}
`,ve=`
  query CUSTOMER_CART_QUERY(
      $pageSize: Int! = 100,
      $currentPage: Int! = 1,
      $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
    ) {
     
    customer {
      ...CUSTOMER_FRAGMENT
    }

    cart: customerCart {
      ...CART_FRAGMENT
    }
  }

  ${de}
  ${A}
`,U=async()=>{const e=o.authenticated,n=o.cartId;if(e)return I(ve,{method:"POST"}).then(({errors:c,data:r})=>{if(c)return G(c);const u={...r.cart,...r.customer};return P(u)});if(!n)throw new Error("No cart ID found");return I(me,{method:"POST",cache:"no-cache",variables:{cartId:n}}).then(({errors:c,data:r})=>c?G(c):P(r.cart))},he=`
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      $pageSize: Int! = 100,
      $currentPage: Int! = 1,
      $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
    ) {
      mergeCarts(
        source_cart_id: $guestCartId,
        destination_cart_id: $customerCartId
      ) {
        ...CART_FRAGMENT 
      }
  }

  ${A}
`,D=async()=>{if(o.initializing)return null;o.initializing=!0,o.config||(o.config=await be());const e=o.authenticated?await Q():await W();return g.emit("cart/initialized",e),g.emit("cart/data",e),o.initializing=!1,e};async function Q(){const e=o.cartId,n=await U();return n?(o.cartId=n.id,!e||n.id===e?n:await I(he,{variables:{guestCartId:e,customerCartId:n.id}}).then(()=>U()).then(c=>{const r={oldCartItems:n.items,newCart:c};return g.emit("cart/merged",r),c}).catch(()=>(console.error("Could not merge carts"),n))):null}async function W(){if(B.getConfig().disableGuestCart===!0||!o.cartId)return null;try{return await U()}catch(e){return console.error(e),null}}const Ce=`
query STORE_CONFIG_QUERY {
  storeConfig {
    minicart_display
    minicart_max_items
    cart_expires_in_days
    cart_summary_display_quantity
    max_items_in_order_summary
    default_country
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
    shopping_cart_display_full_summary
    shopping_cart_display_grand_total
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_zero_tax
    configurable_thumbnail_source
    allow_gift_wrapping_on_order
    allow_gift_wrapping_on_order_items
    allow_order
    allow_items
    allow_gift_receipt
    allow_printed_card
    printed_card_priceV2 {
      currency
      value
    }
    cart_gift_wrapping
    cart_printed_card
  }
}
`,be=async()=>I(Ce,{method:"GET",cache:"force-cache"}).then(({errors:e,data:n})=>e?G(e):ye(n.storeConfig)),z=async()=>{const e=o.authenticated?await Q():await W();return g.emit("cart/data",e),e};export{D as a,Q as b,B as c,W as d,be as e,U as g,F as i,z as r,P as t};
//# sourceMappingURL=refreshCart.js.map
