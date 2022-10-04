function factorial(n) {
  if (n < 0) return
  let val = 1
  for (let i = 2; i <= n; i++)
    val = val * i
  return val
}