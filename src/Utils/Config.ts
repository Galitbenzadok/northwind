// Development + Production configurations
class Config {
    // public supportPhone = "031234567";
}

// Development configuration:
class DevelopmentConfig extends Config {
    public productsUrl = "http://localhost:3030/api/products/";
    public productsImageUrl = "http://localhost:3030/api/products/images/";
}

// Production configuration:
class ProductionConfig extends Config {
    public productsUrl = "http://www.northwind.com/api/products/";
    public productsImageUrl = "http://www.northwind.com/api/products/images/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
