import ProductModel from "../Models/ProductModel";

export class ProductsState {
    public products: ProductModel[] = [];
    // Also can be: public topProducts: ProductModel[] = []  etc.;
}

//Action Type
enum ProductsActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "FetchProducts", 
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct", 
}

//products action 
export interface ProductsAction {
    type: ProductsActionType;
    payload: any;
}

