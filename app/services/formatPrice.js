export default function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  }