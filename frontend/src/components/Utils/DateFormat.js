export const formatDateToShow = (dateString) => {
    const [year, month, day] = dateString.split("-");    
    return `${day}.${month}.${year}`;
};

export const formatISODate = (tarih) => {
    const tarihObj = new Date(tarih);

    const gun = tarihObj.getDate().toString().padStart(2, '0');
    const ay = (tarihObj.getMonth() + 1).toString().padStart(2, '0'); // Aylar 0-11 arasıdır.
    const yil = tarihObj.getFullYear();

    const saat = tarihObj.getHours().toString().padStart(2, '0');
    const dakika = tarihObj.getMinutes().toString().padStart(2, '0');

    return `${gun}.${ay}.${yil} - ${saat}:${dakika}`;
}