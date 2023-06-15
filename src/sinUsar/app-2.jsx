fetch("https://deploy-labeedit-back.onrender.com/post", {
    headers:
    {
        Authorization: TOKEN_NAME
    }
}
).then((dataresponse) => {
    console.log(dataresponse)
    return dataresponse.json()
})
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error.response)
    })

//fetch de prueba en app