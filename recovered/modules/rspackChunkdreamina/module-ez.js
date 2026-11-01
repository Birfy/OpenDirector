export function M(e) {
  return (
    e.payChannel !== "corporate_payment" &&
    e.paymentMethod !== "corporate_payment"
  );
}
