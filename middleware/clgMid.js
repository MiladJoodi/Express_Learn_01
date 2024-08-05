module.exports = async function(req, res, next){
    console.log("in the middleware");
    next();
}