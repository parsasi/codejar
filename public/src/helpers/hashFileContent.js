export default (content) => {
        let hash = 0;
        if (content.length == 0) {
            return hash;
        }
        for (let i = 0; i < content.length; i++) {
            let char = content.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
}

