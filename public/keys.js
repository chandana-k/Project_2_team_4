console.log("our keys are here!");
console.log("id ", process.env.ETSY_ID);
console.log("secret", process.env.ETSY_SECRET);
// console.log(process.env);

exports.etsy = {
  id: process.env.ETSY_ID,
  secret: process.env.ETSY_SECRET
};