module.exports = {
    DYNAMODB_PORT: 8500,
    DYNAMODB_ADMIN_PORT: 8501,
    HTTPS_PORT: 8443,
    HTTP_PORT: 8080,

    redirect_from_http: false, // only usefull if working with ports 80 and 443

    aws_region: "us-east-1",
    // credentials_path: "/media/matej/DATASHUR/iam/lbp.json",
    credentials_path: "",

    domain: "",
    s3_bucket: "",
    s3_assets_folder: "assets",

    /* CloudFront */
    cf_distribution_id: "",
    cf_certificate_arn: "",
    cf_caller_reference: "",
    cf_comment: "",

    /* API Gateway */
    api_gateway_id: "",
    api_gateway_prod_name: "prod",

    /* Lambda */
    lambda_role_arn: "",
    lambda_role_arn_edge: "",

    /* Assets */
    // assets_mapping:
};
