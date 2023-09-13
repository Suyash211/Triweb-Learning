interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {} | []
}

export {returnResponse};