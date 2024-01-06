

// const getImagesPromise = () => new Promise(resolve('algunaurl'))
// getIMagePromise().then(console.log)

const getImg = async () => {

    try {
    const apiKey = 'WQLqvR2ueLA41CqAjYQhBaN3QqZTYZey';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    } catch(error) {
        console.error(error);
    }
};
getImg().then()