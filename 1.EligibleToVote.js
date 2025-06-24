function voteEligibility(age) {
  if (age < 1) {
    console.log("Age is invalid");
  } else if (age < 18) {
    console.log("Not Eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

voteEligibility(40);
voteEligibility(-3);
voteEligibility(18);
voteEligibility(4);
