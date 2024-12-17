const myPromise = new Promise((res, rej) => {
  document.getElementById("btn1").addEventListener("click", () => {
    res("resolve");
  });
  document.getElementById("btn2").addEventListener("click", () => {
    rej("error");
  });
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

  async function newFn(){
    return"maher"
  }

  const res = newFn()
  console.log(res)