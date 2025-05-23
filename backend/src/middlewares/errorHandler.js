function errorHandler (err, req, res, next){
    
    
 const statusCode = err.statusCode || 500
 const message = err.message || 'Internal Server Error'
  
 console.log(err);
 
 return res.status(statusCode)
 .json({ success: false, message, statusCode})

}

export default errorHandler;