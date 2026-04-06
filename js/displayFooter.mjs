

export default class headerFooter{
    async getData(url, category) {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = response.json();
                console.log(data);
                return data.category;
            } else {
                return alert(`Url response not ok. Status: ${response.status}`);
            }
        } catch (error) {
            console.log(`Error displaying footer items. Error: ${error.message}`);
        }
    }
}