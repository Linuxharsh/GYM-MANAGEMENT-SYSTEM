export function generateBillId() {
  return "BILL-" + Math.floor(Math.random() * 100000);
}

export function formatDate() {
  return new Date().toLocaleDateString();
}
