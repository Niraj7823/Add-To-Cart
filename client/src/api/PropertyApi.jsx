export async function getData() {
    const url = "https://verselapi.vercel.app/?herosection=true";
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json

    } catch (error) {
        console.log(error)
    }
}

export async function getSearchData(city, category, pageNumber) {
    const url = new URL('https://verselapi.vercel.app');

    url.searchParams.append('limit', '4');
    url.searchParams.append('page', pageNumber);

    if (city) {
        url.searchParams.append('city', city);
    }

    if (category) {
        url.searchParams.append('category', category);
    }

    console.log("FETCHING URL:", url.toString()); // Debug this

    try {
        const response = await fetch(url.toString());
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}


export async function byDetails(id) {
    const url = `https://verselapi.vercel.app?_id=${id}`;
    try {

        const response = await fetch(url);
        const json = await response.json();

        return json

    }
    catch (error) {
        console.log(error)
    }

}
export async function byBrokerDetails(contact,BrokerName) {
    const url = `https://verselapi.vercel.app?broker=${BrokerName}&contact=${contact}`;
    try {

        const response = await fetch(url);
        const json = await response.json();

        return json

    }
    catch (error) {
        console.log(error)
    }

}


export async function getSearch(city, category, pageNumber) {
    const url = new URL('https://verselapi.vercel.app?select=city,contact,broker');


    if (city) {
        url.searchParams.append('city', city);
    }

    if (category) {
        url.searchParams.append('category', category);
    }

    console.log("FETCHING URL:", url.toString());

    try {
        const response = await fetch(url.toString());
        const json = await response.json();

        // Remove duplicates based on broker + city
        const uniqueData = Array.from(
            new Map(json.map(item => [`${item.broker}-${item.city}`, item])).values()
        );

        return uniqueData;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}
export async function getLikeData(ids) {
    if (!ids.length) return [];

    const query = ids.map(id => `_id=${encodeURIComponent(id)}`).join("&");
    const url = `https://verselapi.vercel.app/?${query}`;

    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log("Failed to fetch liked data:", error);
        return [];
    }
}
  
