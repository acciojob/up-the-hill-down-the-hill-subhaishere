function aveSpd(upTime, upSpd, downSpd) {
  const totalDistance = upSpd * (upTime / 60); // Calculate total distance traveled

  // Calculate total time and average speed
  const totalTime = upTime + (totalDistance / downSpd) * 60;
  const averageSpeed = (2 * totalDistance) / (totalTime / 60);

  return averageSpeed;
}
console.log(aveSpd(18, 20, 60)); // Output: 30
console.log(aveSpd(30, 10, 30)); // Output: 15
console.log(aveSpd(30, 8, 24)); // Output: 12


// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

//alert(aveSpd(upTime, downTime, downSpd));