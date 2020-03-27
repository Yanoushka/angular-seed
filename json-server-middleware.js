module.exports = (req, res, next) => {
    if (req.path.includes('login')) {
        res.set({"Content-Type":" application/json; charset=utf-8"});
        res.send({token: "wfwfgwdfgsfgstfh.dgfcghcfhcfgh.xfgxdfgxdfgxs"});
    } else if (req.path.includes('logout')) {
        res.send();
    } else if (req.path.includes('stocks')) {      
        const productId = req.query.filter.split('||')[2];  
        if(!!req.query.filter &&
            productId !== "4") {
            res.send(
                {
                    "id": productId,
                    "product_id": productId,
                    "categories": "blue, xl",
                    "init_date": "",
                    "update_date": "",
                    "init_size" : 50,
                    "current_size" : 50
                }
              );
        } else {
            
            res.send(null);
        }
    }
    next()
}