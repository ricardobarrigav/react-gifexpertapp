
export const getGifs = async(value) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(value)}&api_key=k4dLFrRwXjtiZ4fpZwajxbQkvms6WcP3`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( (data) => {
        return {
            id: data.id,
            title: data.title,
            url: data.images?.downsized_medium.url
        }
    })

    return gifs;
}
