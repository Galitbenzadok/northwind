// Development + Production configurations
class Config {
    // public supportPhone = "031234567";
}

// Development configuration:
class DevelopmentConfig extends Config {
    public productsUrl = "http://localhost:3030/api/products/";
    public productsImageUrl = "http://localhost:3030/api/products/images/";
    public registerUrl = "http://localhost:3030/api/auth/register/";
    public loginUrl = "http://localhost:3030/api/auth/login/";
}

// Production configuration:
class ProductionConfig extends Config {
    public productsUrl = "http://www.northwind.com/api/products/";
    public productsImageUrl = "http://www.northwind.com/api/products/images/";
    public registerUrl = "http://www.northwind.com/api/auth/register/";
    public loginUrl = "http://www.northwind.com/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
