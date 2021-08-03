export const ShopProduct_action = (ProductInfo) => {
    return {
        type: 'Fetch_AllProduct',
        payload: ProductInfo
    }
}

export const ProductView_Action = () => {
    return {
        type: 'Product_View'
    }
}

export const SortingPrice_Action = (Option) => {
    return {
        type: 'Sorting_Price',
        payload: Option
    }
}