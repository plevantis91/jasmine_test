
it('should calculate the monthly rate correctly', function () {
  // ...
    const values = {
      amount: 500000,
      years: 30,
      rate: 7.8

    };
    expect(calculateMonthlyPayment(values)).toEqual('3599.35')
});


it("should return a result with 2 decimal places", function() {
  // ...
  const values = {
    amount: 40000,
    years: 12,
    rate: 4.5

  };
  expect(calculateMonthlyPayment(values)).toEqual('360.00')
});

/// etc

it('should calculate the high monthly rate correctly', function () {
  // ...
    const values = {
      amount: 10000000,
      years: 40,
      rate: 20

    };
    expect(calculateMonthlyPayment(values)).toEqual('166726.41')
});
