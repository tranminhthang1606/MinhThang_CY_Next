export default function formatDate(inputDate, format = "YYYY-MM-DD") {
    // Kiểm tra xem inputDate có phải là một đối tượng Date hợp lệ
    const date = inputDate instanceof Date && !isNaN(inputDate) ? inputDate : new Date(inputDate);
    
    if (isNaN(date)) {
        throw new Error("Invalid date provided");
    }

    const padZero = (num) => String(num).padStart(2, '0');

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1); // Tháng bắt đầu từ 0
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return format
        .replace("YYYY", year)
        .replace("MM", month)
        .replace("DD", day)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds);
}
