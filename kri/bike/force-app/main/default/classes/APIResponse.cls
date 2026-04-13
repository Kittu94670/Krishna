global class APIResponse {

    public Integer statusCode;
    public String status;
    public Datetime responseDateTime;
    public Object data;
    public String fault;

    // Success Response
    public APIResponse(Object data){

        RestContext.response.statusCode = 200;

        this.statusCode = RestContext.response.statusCode;
        this.status = 'Success';
        this.responseDateTime = System.now();
        this.data = data;
    }
       
    
    
    

    // Error Response
    public APIResponse(Exception e){

        RestContext.response.statusCode = 500;

        this.statusCode = RestContext.response.statusCode;
        this.status = 'Error';
        this.responseDateTime = System.now();
        this.fault = e.getMessage();
    }
    
    //Delete Response
    //public APIResponse(Exception e)

}