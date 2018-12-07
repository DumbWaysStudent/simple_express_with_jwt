const config = {    
    secretKey = process.env.SECRET_KEY
}

module.exports = config




state = {
    categories: {
        list: [],
        data: {},
        isLoading: false,
        isError: false
    }
}


//redux offline