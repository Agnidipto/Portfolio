export const timeDiff = (() => {
  const date1 = new Date("07/13/2021");
  const date2 = new Date();
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Years = Difference_In_Time / (1000 * 3600 * 24 * 365);
  if (Difference_In_Years > Math.floor(Difference_In_Years))
  {return Math.floor(Difference_In_Years).toString().concat('+');}
  else {return Difference_In_Years;}
});