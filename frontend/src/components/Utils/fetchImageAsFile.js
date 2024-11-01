const fetchImageAsFile = async (imageUrl) => {
    try {      
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error('Resmi indirmede hata oluştu: ' + response.statusText);
        }
        const blob = await response.blob();
        const file = new File([blob], 'patient-image.jpg', { type: blob.type });
        return file;
    } catch (error) {
        console.error('Hata:', error);
    }
};
export default fetchImageAsFile;
