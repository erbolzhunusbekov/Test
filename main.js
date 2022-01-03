const Numbers = (n1, n2) => {
  if ( n1 < 9 && n2 < 9 && (n1 + n2) < 9 ) {
    console.log(true)
  } else {
    console.log(false)
  }
}

Numbers(7, 1)