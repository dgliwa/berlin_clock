describe("Berlin Clock Analyzer", function () {
    beforeEach(function () {

    });

    it("should return 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO' for 00:00:00", function(){
      var expected = "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";

      expect(berlinClock("00:00:00")).toEqual(expected);
});

it("should return 'O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO' for 00:00:03", function(){
  var expected = "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";

  expect(berlinClock("00:00:03")).toEqual(expected);
});

it("should return 'Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO' for 00:02:00", function(){
  var expected = "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO";

  expect(berlinClock("00:02:00")).toEqual(expected);
});

it("should return 'Y\nOOOO\nOOOO\nYYOOOOOOOOO\nYYOO' for 00:12:00", function(){
  var expected = "Y\nOOOO\nOOOO\nYYOOOOOOOOO\nYYOO";

  expect(berlinClock("00:12:00")).toEqual(expected);
});

it("should return 'Y\nOOOO\nOOOO\nYYROOOOOOOO\nOOOO' for 00:15:00", function(){
  var expected = "Y\nOOOO\nOOOO\nYYROOOOOOOO\nOOOO";

  expect(berlinClock("00:15:00")).toEqual(expected);
});

it("should return 'Y\nOOOO\nRROO\nOOOOOOOOOOO\nOOOO' for 02:00:00", function(){
  var expected = "Y\nOOOO\nRROO\nOOOOOOOOOOO\nOOOO";

  expect(berlinClock("02:00:00")).toEqual(expected);
});

it("should return 'Y\nRROO\nOOOO\nOOOOOOOOOOO\nOOOO' for 10:00:00", function(){
  var expected = "Y\nRROO\nOOOO\nOOOOOOOOOOO\nOOOO";

  expect(berlinClock("10:00:00")).toEqual(expected);
});

});
