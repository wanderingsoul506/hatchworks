export function renderStars(rating: number) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < full; i++) {
    stars.push("★");
  }

  if (hasHalf) {
    stars.push("☆");
  }

  while (stars.length < totalStars) {
    stars.push("☆");
  }

  return stars;
}
